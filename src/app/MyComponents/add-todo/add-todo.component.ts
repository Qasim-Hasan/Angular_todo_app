import { Component, Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})

export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    if (this.title.trim() && this.desc.trim()) {
      const todo: Todo = {
        sno: Math.floor(Math.random() * 1000), // Generate a random sno for simplicity
        title: this.title,
        desc: this.desc,
        active: true
      };
      this.todoAdd.emit(todo);
      this.title = ''; // Reset input fields
      this.desc = '';
    }
  }
}