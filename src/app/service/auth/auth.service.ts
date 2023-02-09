import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  loggedIn = true;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
