import { Component,ViewChild  } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'; 

import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { AssignmentsComponent } from './assignments/assignments.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {Router} from '@angular/router';
import { AuthService } from './assignments/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AssignmentsService } from './assignments.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,CommonModule, RouterOutlet, MatButtonModule,MatDividerModule, MatIconModule,AssignmentsComponent,MatSlideToggleModule,MatToolbarModule,MatSidenavModule,MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Application de gestion des devoirs à rendre (Assignments)';
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService,private router: Router, private assignmentsService: AssignmentsService) {}

  genererDonneesDeTest() {
    console.log("Peuplement de la BD avec données de test...");
    this.assignmentsService.peuplerBD();
  }
   

  toggleLogin(): void {
    if (!this.authService.isLogged()) {
      // Simuler une connexion admin (vous pouvez remplacer par un formulaire de login)
      this.authService.logIn('admin', 'admin');
    } else {
      this.authService.logout(); // Déconnexion
      this.router.navigate(['/home']); // Rediriger vers la page d'accueil
    }
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLogged(): boolean {
    return this.authService.isLogged();
  }

  // Méthode pour vérifier si l'utilisateur est admin
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  toggleSidebar(): void {
    this.sidenav.toggle();
  }


  

}
