import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { PoiModule } from '@monorepowithnx/poi';

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule,
    PoiModule,
    RouterModule.forChild([
      { path: '', component: AdminComponent }
    ])
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
