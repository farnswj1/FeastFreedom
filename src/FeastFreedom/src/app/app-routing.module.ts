import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenUserCreateComponent } from './users/components/kitchen-user-create/kitchen-user-create.component';
import { KitchenUserDetailComponent } from './users/components/kitchen-user-detail/kitchen-user-detail.component';
import { KitchenUserListComponent } from './users/components/kitchen-user-list/kitchen-user-list.component';
import { RegularUserCreateComponent } from './users/components/regular-user-create/regular-user-create.component';
import { RegularUserDetailComponent } from './users/components/regular-user-detail/regular-user-detail.component';
import { RegularUserListComponent } from './users/components/regular-user-list/regular-user-list.component';

const routes: Routes = [
  { path: '', loadChildren: './user/user.module#UserModule' },
  { path: 'interface', loadChildren: './service/service.module#ServiceModule' },
  // { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users/kitchens', component: KitchenUserListComponent },
  { path: 'users/kitchens/register', component: KitchenUserCreateComponent },
  { path: 'users/kitchens/:id', component: KitchenUserDetailComponent },
  { path: 'users', component: RegularUserListComponent },
  { path: 'users/register', component: RegularUserCreateComponent },
  { path: 'users/:id', component: RegularUserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
