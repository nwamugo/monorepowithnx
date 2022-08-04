import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PoiActions, PoiEntity, PoiSelectors } from '@monorepowithnx/poi';

@Component({
  selector: 'monorepowithnx-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent implements OnInit {
  pois$ = this.store.select(PoiSelectors.getAllPoi);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.initPoi());
  }

  selectPoi(poi: PoiEntity) {
    this.store.dispatch(PoiActions.selectPoi({ poiId: poi.id }))
  }
}
