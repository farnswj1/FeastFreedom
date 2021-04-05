import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';

@Component({
  selector: 'app-kitchen-register',
  templateUrl: './kitchen-register.component.html',
  styleUrls: ['./kitchen-register.component.css']
})
export class KitchenRegisterComponent implements OnInit {

  public ProductHeader = [{ name: 'Hp' }, { name: 'Dell' }, { name: 'Lenovo' }];
  public kitchenForm: any;
  kitchen: any;
  errorMsg: any;

  @Input() user: any;
  @Input() name: any;

  days: Array<String> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday']

  timein: any = [
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
  ]

  timeout: Array<String> = [

    '07:00 PM',
    '08:00 PM',
    '09:00 PM',
    '10:00 PM',
    '11:00 PM',
    '12:00 AM',]

  constructor(private fb: FormBuilder, private proService: ProvidersService, private router: Router) {

  }

  ngOnInit(): void {

    this.kitchenForm = this.fb.group({
      name: [this.name],
      user: [this.user],
      workdays: this.addDaysControls(), //testing validations NOT FINAL YET
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],

      menu: this.fb.array([
        this.fb.group({
          id: [1],
          itemName: [''],
          vegan: [''],
          price: ['']

        })
      ]),

      image: [''],

    });
  }

  get menuArray() {
    return <FormArray>this.kitchenForm.get('menu');
  }

  get daysArray(){
    return <FormArray>this.kitchenForm.get('workdays');
  }

  addDaysControls() {
    const arr = this.days.map(element => {
      return this.fb.control(false);
    });

    return this.fb.array(arr);
  }

  addNewItem() {
    const itemLength = this.menuArray.length;
    const newitem = this.fb.group({
      id: [itemLength+1],
      itemName: [''],
      vegan: [''],
      price: ['']
    });
   
    this.menuArray.push(newitem);
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
    // this.router.navigate(['home']);
    // this.kitchenForm.reset();

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

  get id() {
    let item = <FormGroup>this.kitchenForm.controls.menu;
    return item.controls.id;
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
