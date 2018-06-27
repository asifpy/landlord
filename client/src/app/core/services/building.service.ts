import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/operators/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { IBuilding } from '../../shared/interfaces';
import { HandleErrorService } from './errorlog.service';


@Injectable()
export class BuildingService {

  private buildingBaseUrl = `${environment.apiUrl}api/buildings/`;

  constructor(private http: HttpClient, private errorService: HandleErrorService) { }

  getBuildings(): Observable<IBuilding[]> {
    return this.http.get<IBuilding[]>(this.buildingBaseUrl)
      .catch(this.errorService.handleError);
  }

  getBuilding(id: number): Observable<IBuilding> {
    const buildingUrl = `${this.buildingBaseUrl}${id}/`;
    return this.http.get<IBuilding>(buildingUrl)
      .catch(this.errorService.handleError);
  }

  getBuildingApartments(id: number) {
    const apartmentUrl = `${this.buildingBaseUrl}${id}/apartments/`;
    return this.http.get(apartmentUrl)
      .catch(this.errorService.handleError);
  }

  createBuilding(building: IBuilding): Observable<IBuilding> {
    return this.http.post<IBuilding>(this.buildingBaseUrl, building)
      .catch(this.errorService.handleError);
  }

  updateBuilding(id: number, building: IBuilding): Observable<IBuilding> {
    const buildingUrl = `${this.buildingBaseUrl}${id}/`;
    return this.http.put<IBuilding>(buildingUrl, building)
      .catch(this.errorService.handleError);
  }

}
