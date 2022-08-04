import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@monorepowithnx/poi';
import { PoiListComponent } from './poi-list/poi-list.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    VisitorComponent,
    PoiListComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    PoiModule,
    GoogleMapsModule,
    RouterModule.forChild([{ path: '', component: VisitorComponent }]),
  ],
})
export class VisitorModule {}
