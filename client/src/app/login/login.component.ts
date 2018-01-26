import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../core/services/auth.service';
import { ValidationService } from '../core/services/validation.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthService) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            username: ['', [ Validators.required]],
            password: ['', [ Validators.required]]
        });
    }

    submit() {
        this.authService.login(this.loginForm.value)
            .subscribe((token) => {
                if (token) {
                    this.router.navigate(['/']);
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                }

            });

    }
}
