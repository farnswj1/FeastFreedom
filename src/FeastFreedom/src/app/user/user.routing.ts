import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [{ path: '', component: DashboardComponent }];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  routes
);
