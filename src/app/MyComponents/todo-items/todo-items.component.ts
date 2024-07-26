import { Component, Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [CommonModule, AddTodoComponent],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo: Todo){
    this.todoDelete.emit(todo);
  }
}
