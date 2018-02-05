import { Injectable, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tokenNotExpired } from 'angular2-jwt';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';

import { environment } from '../../../environments/environment';


@Injectable()
export class AuthService {

  private loginUrl = `${environment.apiUrl}auth/login/`;
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  login(credentials) {
    return this.http.post(this.loginUrl, credentials)
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user['token']) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', user['token']);
          this.authChanged.emit(true);
        }
        return user['token'];
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.authChanged.emit(false);
  }

  public isLoggedIn() {
    // The tokenNotExpired function can be used to check whether a JWT
    // exists in local storage, and if it does, whether it has expired or not.
    // If the token is valid, tokenNotExpired returns true, otherwise it returns false

    return tokenNotExpired();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}
