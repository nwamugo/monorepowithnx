import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { PoiActions, PoiEntity, PoiSelectors } from '@monorepowithnx/poi';
import { AdminService } from './admin.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'monorepowithnx-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data: []
    }]
  };

  constructor(
    private store: Store,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.store.select(PoiSelectors.getAllPoi)
      .pipe(takeUntil(this.destroy$))
      .subscribe(pois => {
        this.buildChart(pois);
      })
    this.store.dispatch(PoiActions.initPoi());
  }

  private buildChart(pois: PoiEntity[]) {
    this.pieChartData.labels = pois.map(poi => poi.name);
    this.pieChartData.datasets[0].data = this.adminService.getStatistics(pois);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
