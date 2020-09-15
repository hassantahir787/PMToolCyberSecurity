import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private localStorageService: LocalStorageService,
    private apiService: ApiService) { }

  public login(username: string, password: string): Observable<any> {

    return new Observable((observer) => {
      this.apiService.login(username, password)
        .subscribe((res: any) => {
          console.log('Successfully posted: ', res);

          if (res.success) {
            this.localStorageService.saveCredentials(res.user.email, res.user.token)
            observer.next(res);
          } else {
            observer.error();
          }
        }, (err) => {
          console.log('Error while sending post request', err);
          observer.error(err);
        });
    });
  }

  public getAuthToken() {
    const credentials = this.localStorageService.getCredentials();

    if (!credentials) {
      return null;
    }

    return credentials.token;
  }

  public isAuthenticated(): boolean {
    const credentials = this.localStorageService.getCredentials();

    if (credentials.email && credentials.token) {
      return true;
    }

    return false;
  }

  public isAdmin(): boolean {
    const credentials = this.localStorageService.getCredentials();

    if (credentials.role == "admin" || credentials.role == "super_admin") {
      return true;
    }
    else {
      return false;
    }
  }

  logOut() {
    this.localStorageService.clearLocalStorage();
  }

}
