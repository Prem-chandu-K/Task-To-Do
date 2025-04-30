import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../Service/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  todo = {
    title: '',
    description: ''
  };

  constructor(
    private todoService: TodoService,
    private router: Router
  ) {}

  submit(): void {
    this.todoService.addTodo(this.todo).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error('Error adding todo:', err)
    });
  }

}
