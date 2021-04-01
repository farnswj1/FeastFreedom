import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';

export const routes: Routes = [{ path: '/interface', component: InterfaceComponent }];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  routes
);