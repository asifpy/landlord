import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    loginLogoutText = 'Login';
    sub: Subscription;

    constructor(
      private router: Router,
      private authservice: AuthService) { }

    ngOnInit() {
      this.sub = this.authservice.authChanged
            .subscribe((loggedIn: boolean) => {
                this.setLoginLogoutText();
            },
            (err: any) => console.log(err));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loginOrOut() {
        const isAuthenticated = this.authservice.isLoggedIn();
        if (isAuthenticated) {
            this.authservice.logout();
            this.setLoginLogoutText();
            this.redirectToLogin();
        }
        this.redirectToLogin();
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

  setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isLoggedIn()) ? 'Logout' : 'Login';
    }

}
