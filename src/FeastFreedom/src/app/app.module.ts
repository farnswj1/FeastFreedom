// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, UserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
