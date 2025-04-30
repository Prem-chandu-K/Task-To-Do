import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class  AuthServiceService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private baseUrl = 'http://localhost:8080/auth';

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { name, email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
