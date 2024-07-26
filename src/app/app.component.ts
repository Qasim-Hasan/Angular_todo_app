import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './MyComponents/todos/todos.component';
//import {TodoItemsComponent} from './MyComponents/todo-items/todo-items.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cwh-todo-list';

  constructor() {
    setTimeout(() => {
      this.title = 'TodoList';
    }, 2000);
  }

  list = [1, 2, 3, 4, 5];
  sum = 0;

  calculateSum() {
    this.sum = this.list.reduce((acc, item) => acc + item, 0);
    return this.sum;
  }
}
