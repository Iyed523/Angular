import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  

  const isAdmin = authService.isAdmin(); // Appel synchrone

  if (isAdmin) {
    console.log("Vous êtes admin, navigation autorisée");
    return true;
  } else {
    console.log("Vous n'êtes pas admin, navigation refusée");
    router.navigate(['/home']);
    return false;
  }
  
};