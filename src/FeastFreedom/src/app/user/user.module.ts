import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './user.routing';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DashboardComponent, KitchenComponent, CarouselComponent],
  imports: [CommonModule, routing, NgbModule],
})
export class UserModule {}
