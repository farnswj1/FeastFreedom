import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InterfaceComponent } from './interface/interface.component';
import { routing } from './services.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    InterfaceComponent, 
    RegisterComponent],
    
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing,
    NgbModule
  ]
})
export class ServiceModule { }
