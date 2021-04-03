import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public kitchenForm: any;
  kitchen: any;
  errorMsg: any;

  @Input() user: any;
  @Input() name: any;

  days: Array<string> = [

    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'];

  time_in: Array<string> = [
    '11:00:00',
    '12:00:00',
    '13:00:00',
    '14:00:00',
    '15:00:00',
    '16:00:00',
  ]

  time_out: Array<string> = [

    '17:00:00',
    '18:00:00',
    '19:00:00',
    '20:00:00',
    '21:00:00',
    '22:00:00',]

  constructor(private fb: FormBuilder, private proService: ProvidersService, private router: Router) {

  }

  ngOnInit(): void {

    this.kitchenForm = this.fb.group({
      name: [this.name],
      user: [this.user],
      workdays: ['', [Validators.required]], //testing validations NOT FINAL YET
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],

      menu: this.fb.array([this.addMenuGroup()]),

      image: [''],

    });
  }

  addMenuGroup() {
    return this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]],
      vegan: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

    });
  }

  get menuArray() {
    return <FormArray>this.kitchenForm.get('menu');
  }

  Save(kitchenForm: any) {

    console.log(this.kitchenForm.value);
    this.proService.postKitchen(this.kitchenForm.value).subscribe(
      (data) => {
        this.kitchen = data;
        console.log(this.kitchen);
        this.proService.getKitchen().subscribe(
          (data) => this.kitchen = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['home']);
    this.kitchenForm.reset();

  }

  get workdays() {
    return this.kitchenForm.get('workdays');
  }

  get start_time() {
    return this.kitchenForm.get('start_time');
  }

  get end_time() {
    return this.kitchenForm.get('end_time');
  }

  get itemName() {
    let item = <FormGroup>this.kitchenForm.controls.menu;
    return item.controls.itemName;
  }

  get vegan() {
    let v = <FormGroup>this.kitchenForm.controls.menu;
    return v.controls.vegan;
  }

  get price() {
    let p = <FormGroup>this.kitchenForm.controls.menu;
    return p.controls.itemName;
  }

  get image() {
    return this.kitchenForm.get('image');
  }


}
