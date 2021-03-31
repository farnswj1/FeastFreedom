import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing } from './user.routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, routing],
})
export class UserModule {}
