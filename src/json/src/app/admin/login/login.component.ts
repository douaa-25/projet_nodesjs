import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  message='';

  constructor(public auth : AuthentificationService, public router: Router){}

  login() {
    this.auth.login({ username: this.username, password: this.password }).subscribe({
      next: res => {
        this.message = 'Welcome to our website';
        localStorage.setItem('token', res.token);
        this.router.navigate(['/admin/apps']); 
      },
      error: () => {
        this.message = 'This compte does not exist';
      }
    });
  }
}
