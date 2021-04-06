import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenCreateComponent } from './kitchens/components/kitchen-create/kitchen-create.component';
import { KitchenDetailComponent } from './kitchens/components/kitchen-detail/kitchen-detail.component';
import { KitchenListComponent } from './kitchens/components/kitchen-list/kitchen-list.component';
import { InterfaceComponent } from './service/interface/interface.component';
import { KitchenRegisterComponent } from './service/interface/kitchen-register/kitchen-register.component';
import { KitchenUserCreateComponent } from './users/components/kitchen-user-create/kitchen-user-create.component';
import { KitchenUserDetailComponent } from './users/components/kitchen-user-detail/kitchen-user-detail.component';
import { KitchenUserListComponent } from './users/components/kitchen-user-list/kitchen-user-list.component';
import { KitchenUserUpdateComponent } from './users/components/kitchen-user-update/kitchen-user-update.component';
import { RegularUserCreateComponent } from './users/components/regular-user-create/regular-user-create.component';
import { RegularUserDetailComponent } from './users/components/regular-user-detail/regular-user-detail.component';
import { RegularUserListComponent } from './users/components/regular-user-list/regular-user-list.component';
import { RegularUserUpdateComponent } from './users/components/regular-user-update/regular-user-update.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'home',
  // },
  //{ path: '', loadChildren: './user/user.module#UserModule' },
  //{ path: 'interface', loadChildren: './service/service.module#ServiceModule' },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/kitchens', component: KitchenUserListComponent },
  { path: 'users/kitchens/register', component: KitchenUserCreateComponent },
  { path: 'users/kitchens/:id', component: KitchenUserDetailComponent },
  { path: 'users/kitchens/:id/update', component: KitchenUserUpdateComponent },
  { path: 'users', component: RegularUserListComponent },
  { path: 'users/register', component: RegularUserCreateComponent },
  { path: 'users/:id', component: RegularUserDetailComponent },
  { path: 'users/:id/update', component: RegularUserUpdateComponent },
  { path: "kitchens", component: KitchenListComponent },
  { path: "kitchens/register", component: KitchenCreateComponent },
  { path: "kitchens/:id", component: KitchenDetailComponent },
  { path: 'interface', component: InterfaceComponent},
  { path: 'register/:id', component: KitchenRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
