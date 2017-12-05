import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

// import { AuthService } from '../services/auth.service';
// import { GrowlerService, GrowlerMessageType } from '../growler/growler.service';

@Component({
    selector: 'landlord-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    isCollapsed: boolean;
    loginLogoutText: string = 'Login';

}