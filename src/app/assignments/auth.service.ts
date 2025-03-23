import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);
  private userRoleSubject = new BehaviorSubject<string>('');

  // Tableau de comptes utilisateurs (login, password, role)
  private users = [
    { login: 'admin', password: 'admin', role: 'admin' },
    { login: 'user', password: 'user', role: 'user' },
  ];

  // Observable pour suivre l'état de connexion
  isLogged$ = this.loggedInSubject.asObservable();

  // Observable pour suivre le rôle de l'utilisateur
  userRole$ = this.userRoleSubject.asObservable();

  constructor() {}

  // Méthode pour simuler une connexion
  logIn(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.login === username && u.password === password
    );

    if (user) {
      this.loggedInSubject.next(true);
      this.userRoleSubject.next(user.role);
      return true;
    }
    return false;
  }

  // Méthode pour se déconnecter
  logout(): void {
    this.loggedInSubject.next(false);
    this.userRoleSubject.next('');
  }

  // Vérifier si l'utilisateur est connecté
  isLogged(): boolean {
    return this.loggedInSubject.value;
  }

  // Vérifier si l'utilisateur est admin
  isAdmin(): boolean {
    return this.userRoleSubject.value === 'admin';
  }
}