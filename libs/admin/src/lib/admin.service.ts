import { Injectable } from '@angular/core';
import { PoiEntity } from '@monorepowithnx/poi';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  getStatistics(pois: PoiEntity[]): number[] {
    return pois.map(poi => {
      const stat = localStorage.getItem('tour-' + poi.id) ?? 0;
      return +stat;
    });
  }
}
