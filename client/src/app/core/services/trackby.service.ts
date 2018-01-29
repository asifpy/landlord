import { Injectable } from '@angular/core';

import { IBuilding, IApartment, ITenant } from '../../shared/interfaces';

@Injectable()
export class TrackByService {

  building(index: number, building: IApartment) {
    return building.id;
  }

  apartment(index: number, apartment: IApartment) {
    return index;
  }

  tenant(index: number, tenant: ITenant) {
    return index;
  }

}
