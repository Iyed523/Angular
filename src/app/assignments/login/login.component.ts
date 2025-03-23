import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importez MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Importez MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importez MatButtonModule
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true, // Indique que c'est un composant autonome
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule], // Importez les modules ici
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.authService.logIn(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      alert('Identifiants incorrects');
    }
  }
}