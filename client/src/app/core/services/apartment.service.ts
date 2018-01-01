import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { IApartment } from '../../shared/interfaces';


@Injectable()
export class ApartmentService {

  private apartmentBaseUrl = `${environment.apiUrl}api/v1/apartments/`;

  constructor(private http: HttpClient) { }

  getApartments(): Observable<IApartment[]> {
    return this.http.get<IApartment[]>(this.apartmentBaseUrl)
      .catch(this.handleError);
  }

  getApartment(id: number): Observable<IApartment> {
    const apartmentUrl = `${this.apartmentBaseUrl}${id}/`;
    return this.http.get<IApartment>(apartmentUrl)
      .catch(this.handleError);

  }

  createApartment(apartment: IApartment): Observable<IApartment> {
    return this.http.post<IApartment>(this.apartmentBaseUrl, apartment)
      .catch(this.handleError);
  }

  updateApartment(id: number, apartment: IApartment): Observable<IApartment> {
    const apartmentUrl = `${this.apartmentBaseUrl}${id}/`;
    return this.http.put<IApartment>(apartmentUrl, apartment)
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error.message);
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }

    // The backend returned an unsuccessful response code.
    console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    return Observable.throw(error || 'Backend server error');
  }

}
