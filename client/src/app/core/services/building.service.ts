import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';


@Injectable()
export class BuildingService {

	private buildingBaseUrl: string = `${environment.apiUrl}api/v1/buildings`;
	apartmentsBaseUrl: string;

	constructor(private http: HttpClient) { }

	getBuildings() {
		return this.http.get(this.buildingBaseUrl)
			.catch(this.handleError);
	}

	getBuilding(id: number) {
		const buildingUrl = `${this.buildingBaseUrl}/${id}/`;
		return this.http.get(buildingUrl)
			.catch(this.handleError);

	}

	getBuildingApartments(id: number) {
		const apartmentUrl = `${this.buildingBaseUrl}/${id}/apartments/`;
		return this.http.get(apartmentUrl)
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