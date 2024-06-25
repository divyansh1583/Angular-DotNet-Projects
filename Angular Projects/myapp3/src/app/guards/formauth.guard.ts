import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const formauthGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthService);
  
  // Check if the user is logged in using the AuthService
  if (authService.loggedIn()) {
    return true; // If logged in, allow access to the route
  } else {
    return false; // If not logged in, deny access to the route
  }
};
