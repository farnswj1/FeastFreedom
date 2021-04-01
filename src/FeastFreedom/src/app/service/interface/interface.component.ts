import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { ProvidersService } from '../../DIservices/providers.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  public providersForm: any;
  kitchenUser: any;
  errorMsg: any;

  constructor(private fb: FormBuilder, private proService: ProvidersService, private router: Router) { 

  }

  ngOnInit(): void {
    this.providersForm = this.fb.group({
     name: ['', [Validators.required, Validators.minLength(3)]], //testing validations NOT FINAL YET
     email: ['', [Validators.required, Validators.minLength(3)]],
     password: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
   });
 }

 onSubmit(providersForm:any){
   console.log(this.providersForm.value);
   this.proService.postKitchenUser(this.providersForm.value).subscribe(
     (data) => {
       this.kitchenUser = data; 
       console.log(this.kitchenUser);
       this.proService.getKitchenUser().subscribe(
         (data) => this.kitchenUser = data,
         (error) => this.errorMsg = error
       )
     },
     (error) => this.errorMsg = error
   )
   this.router.navigate(['']); //edit here child (next) click
   this.providersForm.reset();
 }

 get name() {
   return this.providersForm.get('name');
 }

 get email() {
   return this.providersForm.get('email');
 }

 get password() {
   return this.providersForm.get('password');
 }

}
