import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter();

  content?: string;
  day?: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.content) {
      alert('Please add the task!');
      return;
    }
    if (!this.day) {
      alert('Please set the date');
      return;
    }
    const newTask = {
      id: Date.now(),
      content: this.content,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.content = '';
    this.day = '';
    this.reminder = false;
  }
}
