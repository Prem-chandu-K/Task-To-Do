import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Service/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthServiceService, private router: Router) {}

  register() {
    this.authService.register(this.name, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => this.error = 'Registration failed. Try again.'
    });
  }
}
