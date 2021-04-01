import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './user.routing';
import { KitchenComponent } from './kitchen/kitchen.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [DashboardComponent, KitchenComponent, CarouselComponent, DetailComponent, MenuComponent],
  imports: [CommonModule, routing, NgbModule],
})
export class UserModule {}
