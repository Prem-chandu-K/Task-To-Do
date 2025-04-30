import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: err =>{
        alert('Invalid Credentials. Please try again.');
        this.error = 'Login failed. Please try again.';
      }
    });
  }
}
