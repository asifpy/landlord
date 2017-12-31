import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { ITenant } from '../../shared/interfaces';


@Injectable()
export class TenantService {

	private TenantBaseUrl: string = `${environment.apiUrl}api/v1/tenants/`;

	constructor(private http: HttpClient) { }

	getTenants(): Observable<ITenant[]> {
		return this.http.get<ITenant[]>(this.TenantBaseUrl)
			.catch(this.handleError);
	}

	getTenant(id: number): Observable<ITenant> {
		const tenantUrl = `${this.TenantBaseUrl}${id}/`;
		return this.http.get<ITenant>(tenantUrl)
			.catch(this.handleError);

	}

	createTenant(tenant: ITenant): Observable<ITenant> {
		return this.http.post<ITenant>(this.TenantBaseUrl, tenant)
			.catch(this.handleError);
	}

	updateTenant(id:number, tenant: ITenant): Observable<ITenant> {
		const tenantUrl = `${this.TenantBaseUrl}${id}/`;
		return this.http.put<ITenant>(tenantUrl, tenant)
			.catch(this.handleError);
	}

	private handleError(error: HttpErrorResponse) {

		if (error.error instanceof Error) {
			// A client-side or network error occurred. Handle it accordingly.
			console.log('An error occurred:', error.error.message);
			let errMessage = error.error.message;
			return Observable.throw(errMessage);
		}

		// The backend returned an unsuccessful response code.
		console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
		return Observable.throw(error || 'Backend server error');
	}

}