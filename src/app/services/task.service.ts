import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask, tasks } from '../task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private taskUrl = 'http://localhost:3000/task';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private tasks: ITask[] = tasks;

  constructor(private http: HttpClient) {}

  getAllTasks() {
    return this.http.get<ITask[]>(this.taskUrl);
  }

  addTask(task: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.taskUrl, task, this.httpOptions);
  }

  updateTaskReminder(task: ITask): Observable<ITask> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http.put<ITask>(url, task, this.httpOptions);
  }

  deleteTask(task: ITask): Observable<ITask> {
    const url = `${this.taskUrl}/${task.id}`;
    return this.http.delete<ITask>(url);
  }
}
