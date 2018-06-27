import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../../environments/environment';
import { ITenant } from '../../shared/interfaces';
import { HandleErrorService } from './errorlog.service';


@Injectable()
export class TenantService {

  private TenantBaseUrl = `${environment.apiUrl}api/tenants/`;

  constructor(private http: HttpClient, private errorService: HandleErrorService) { }

  getTenants(): Observable<ITenant[]> {
    return this.http.get<ITenant[]>(this.TenantBaseUrl)
      .catch(this.errorService.handleError);
  }

  getTenant(id: number): Observable<ITenant> {
    const tenantUrl = `${this.TenantBaseUrl}${id}/`;
    return this.http.get<ITenant>(tenantUrl)
      .catch(this.errorService.handleError);

  }

  createTenant(tenant: ITenant): Observable<ITenant> {
    return this.http.post<ITenant>(this.TenantBaseUrl, tenant)
      .catch(this.errorService.handleError);
  }

  updateTenant(id: number, tenant: ITenant): Observable<ITenant> {
    const tenantUrl = `${this.TenantBaseUrl}${id}/`;
    return this.http.put<ITenant>(tenantUrl, tenant)
      .catch(this.errorService.handleError);
  }

}
