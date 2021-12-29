import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: ITask;
  @Output() toggleReminder = new EventEmitter();

  faTimes = faTimes;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onToggleReminder(task: ITask) {
    this.toggleReminder.emit(task);
  }
}
