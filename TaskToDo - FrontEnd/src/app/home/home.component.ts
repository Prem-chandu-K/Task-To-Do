import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo } from '../model/todo.model';
import { TodoService } from '../Service/todo.service';
import { AuthServiceService } from '../Service/auth-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];

  constructor(
    private todoService: TodoService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
      },
      error: (err) => {
        console.error('Error fetching todos:', err);
      }
    });
  }

  logout(): void {
    this.authService.logout();
  }
  deleteTodo(id: number) {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.todoService.deleteTodo(id).subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
    }
  }

}
