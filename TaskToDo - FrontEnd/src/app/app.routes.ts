import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddComponent } from './Todo/add/add.component';
import { UpdateComponent } from './Todo/update/update.component';
import { AboutComponent } from './about/about.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent , canActivate: [authGuard] },
  { path: 'add', component: AddComponent , canActivate: [authGuard]},
  { path: 'update/:id', component: UpdateComponent,canActivate: [authGuard] },
  { path: 'about', component: AboutComponent }

];
