import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Todo } from '../model/todo.model';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private http = inject(HttpClient);
  private authService = inject(AuthServiceService);
  private baseUrl = 'http://localhost:8080/api/todos';

  getTodos(): Observable<Todo[]> {
    const token = this.authService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Todo[]>(this.baseUrl, { headers });
  }
  addTodo(todo: { title: string; description: string }) {
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    return this.http.post(`${this.baseUrl}`, todo, { headers });
  }

  getTodoById(id: number) {
    const token = localStorage.getItem('token');
    const headers = {
      'Authorization': `Bearer ${token}`
    };
  
    return this.http.get<Todo>(`${this.baseUrl}/${id}`, { headers });
  }
  

  updateTodo(id: number, todo: { title: string; description: string }) {
    const token = this.authService.getToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put(`${this.baseUrl}/${id}`, todo, { headers });
  }

  deleteTodo(id: number) {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
  
    return this.http.delete(`${this.baseUrl}/${id}`, { headers });
  }
  

}
