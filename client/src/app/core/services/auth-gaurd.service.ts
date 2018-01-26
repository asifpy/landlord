import { Injectable } from '@angular/core';

import {
  Router,
  CanActivate,
  CanLoad,
  ActivatedRouteSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(public authService: AuthService, public router: Router) {}

  canActivate() {
    return this.checkLogin();
  }

  canLoad() {
    return this.checkLogin();
  }

  checkLogin() {
    if (this.authService.isLoggedIn()) { return true; }

    this.router.navigate(['/login']);
    return false;
  }
}
