import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


// @Injectable()
// export class AuthService {
//     constructor(private http: HttpClient) {}

//     login(username: string, password: string) {
//         const loginUrl = '/auth/login/';
//         return this.http.post(loginUrl, {username: username, passowrd:password})
//             .do(res => this.storeToken)
//             .shareReplay();
//     }

//     storeToken(authResponse) {

//     }
// }


// @Injectable()
// export class AuthenticationService {
//     constructor(private http: Http) { }

//     login(username: string, password: string) {
//         return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
//             .map((response: Response) => {
//                 // login successful if there's a jwt token in the response
//                 let user = response.json();
//                 if (user && user.token) {
//                     // store user details and jwt token in local storage to keep user logged in between page refreshes
//                     localStorage.setItem('currentUser', JSON.stringify(user));
//                 }
//             });
//     }

//     logout() {
//         // remove user from local storage to log user out
//         localStorage.removeItem('currentUser');
//     }
// }
