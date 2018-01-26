import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    isCollapsed: boolean;
    loginLogoutText = 'Login';

    constructor(
      private router: Router,
      private authservice: AuthService) { }

    ngOnInit() {
      if (this.authservice.isLoggedIn) {
        this.loginLogoutText = "Logout"
      }
    }

    loginOrOut() {
        const isAuthenticated = this.authservice.isLoggedIn();
        if (isAuthenticated) {
            this.authservice.logout()
            this.setLoginLogoutText()
            this.redirectToLogin()
        }
        this.redirectToLogin()
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

  setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isLoggedIn()) ? 'Logout' : 'Login';
    }

}
