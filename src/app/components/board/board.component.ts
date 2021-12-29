import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private tasksService: TaskService) {}

  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  addTask(task: ITask) {
    this.tasksService.addTask(task).subscribe((t) => this.tasks.push(t));
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task).subscribe();
  }

  clickDelete(task: ITask) {
    this.tasksService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }
}
