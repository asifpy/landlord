import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { IApartment } from '../../shared/interfaces';
import { HandleErrorService } from './errorlog.service';


@Injectable()
export class ApartmentService {

  private apartmentBaseUrl = `${environment.apiUrl}api/v1/apartments/`;

  constructor(private http: HttpClient, private errorService: HandleErrorService) { }

  getApartments(): Observable<IApartment[]> {
    return this.http.get<IApartment[]>(this.apartmentBaseUrl)
      .catch(this.errorService.handleError);
  }

  getApartment(id: number): Observable<IApartment> {
    const apartmentUrl = `${this.apartmentBaseUrl}${id}/`;
    return this.http.get<IApartment>(apartmentUrl)
      .catch(this.errorService.handleError);

  }

  createApartment(apartment: IApartment): Observable<IApartment> {
    return this.http.post<IApartment>(this.apartmentBaseUrl, apartment)
      .catch(this.errorService.handleError);
  }

  updateApartment(id: number, apartment: IApartment): Observable<IApartment> {
    const apartmentUrl = `${this.apartmentBaseUrl}${id}/`;
    return this.http.put<IApartment>(apartmentUrl, apartment)
      .catch(this.errorService.handleError);
  }
}
