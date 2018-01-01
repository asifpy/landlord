import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    isCollapsed: boolean;
    loginLogoutText = 'Login';

}
