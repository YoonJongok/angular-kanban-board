import { Injectable } from '@angular/core';
import { ITask, tasks } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = tasks;

  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  addTask(task: ITask) {
    return this.tasks.push(task);
  }

  updateTaskReminder(task: ITask) {
    return (this.tasks = [...this.tasks, task]);
  }
}
