import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../Service/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  todoForm!: FormGroup;
  todoId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.todoId = +this.route.snapshot.paramMap.get('id')!;
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Optional: Fetch existing todo details
    this.todoService.getTodoById(this.todoId).subscribe(todo => {
      this.todoForm.patchValue({
        title: todo.title,
        description: todo.description
      });
    });
  }

  onUpdate(): void {
    if (this.todoForm.valid) {
      this.todoService.updateTodo(this.todoId, this.todoForm.value).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }
}
