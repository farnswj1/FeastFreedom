import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceComponent } from './interface/interface.component';
import { DashboardComponent} from '../user/dashboard/dashboard.component'

export const routes: Routes = 
[ { path: '/interface', component: InterfaceComponent},
  { path: '/register', component: InterfaceComponent },
  { path: '/home', component: DashboardComponent}
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  routes
);