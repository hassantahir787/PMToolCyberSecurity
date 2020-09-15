import { Injectable } from '@angular/core';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveCredentials(email, token) {
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    if (token) {
      const decodedToken = jwt_decode(token);
      if (decodedToken && decodedToken.role) {
        let role = "";

        switch (decodedToken.role) {
          case 1:
            role = "super_admin";
            break;

          case 2:
            role = "admin";
            break;

          case 3:
            role = "user"
            break;
        }

        localStorage.setItem("role", role);
      }
    }

  }

  getCredentials() {
    let credentials = {
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role")
    }

    return credentials;
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
