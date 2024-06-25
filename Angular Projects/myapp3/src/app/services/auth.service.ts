import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  time=localStorage.getItem('login_token');
  time2=!!localStorage.getItem('login_token');
  
  router : any;
  constructor(private route: Router) {
      this.router = route
   }
  loggedIn() {
    return (localStorage.getItem('login_token'))?true:false;
  }
}