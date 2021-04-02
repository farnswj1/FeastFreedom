// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'

// Router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegularUserListComponent } from './users/components/regular-user-list/regular-user-list.component';
import { DisplayUserListComponent } from './users/components/display-user-list/display-user-list.component';
import { InterfaceComponent} from './service/interface/interface.component'
import { RegisterComponent } from './service/interface/register/register.component';
import { KitchenUserListComponent } from './users/components/kitchen-user-list/kitchen-user-list.component'


@NgModule({
  declarations: 
  [
    AppComponent, 
    RegularUserListComponent, 
    DisplayUserListComponent, 
    KitchenUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    NgbModule,
    //ServiceModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
