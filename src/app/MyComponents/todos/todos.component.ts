import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemsComponent } from "../todo-items/todo-items.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemsComponent, AddTodoComponent,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  localItem:string | null;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem===null){
      this.todos = [];
    }else{
     this.todos = JSON.parse(this.localItem);
    }
    
  }

  //Use Cases: Initialize variables, fetch data, and set up subscriptions.
  // Help you to get everything ready before your component shows up on screen
  ngOnInit(): void {}

  deleteToDo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  AddToDo(todo:Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
