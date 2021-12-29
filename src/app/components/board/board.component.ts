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
    this.tasks = this.tasksService.getAllTasks();
  }

  addTask(task: ITask) {
    this.tasks.push(task);
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.tasksService.updateTaskReminder(task);
  }
}
