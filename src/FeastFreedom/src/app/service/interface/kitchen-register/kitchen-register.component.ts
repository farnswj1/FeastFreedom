import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { InterfaceComponent } from '../interface.component'



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
  userId: any;
  name: any;


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

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder, private proService: ProvidersService, private router: Router) {

  }

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = Number(id);
    });

    this.kitchenForm = this.fb.group({
      name: [this.proService.getName()],
      user: [this.userId],
      // workdays: this.addDaysControls(), //testing validations NOT FINAL YET
      workdays: this.fb.array([
        this.fb.group({
          // day: this.addDaysControls(),
          day: ['', [Validators.required]],
          start_time: ['', [Validators.required]],
          end_time: ['', [Validators.required]],
        })

      ]),

      menu: this.fb.array([
        this.fb.group({
          itemName: [''],
          vegan: [null],
          price: [null]

        })
      ]),

      featured: [null],

      image: [''],

    });

  }

  addDaysControls() {
    const arr = this.days.map(element => {
      return this.fb.control(false);
    });

    return this.fb.array(arr);
  }

  // get daysArray(){
  //   return <FormArray>this.kitchenForm.get('workdays');
  // }

  addNewItem() {
    const itemLength = this.menuArray.length;
    const newitem = this.fb.group({
      itemName: [''],
      vegan: [null],
      price: [null]
    });

    this.menuArray.push(newitem);
  }

  addNewDay() {
    const itemLength = this.workdaysArray.length;
    const newitem = this.fb.group({
      day: ['', [Validators.required]],
      start_time: ['', [Validators.required]],
      end_time: ['', [Validators.required]],
    });

    this.workdaysArray.push(newitem);
  }

  Save(kitchenForm: any) {

    console.log(this.kitchenForm.value);
    let item = {
      "menu":
        this.kitchenForm.value.menu
      ,
      "name":
        this.kitchenForm.name
      ,
      "workdays":
        this.kitchenForm.value.workdays
      ,
      "user":
        this.kitchenForm.value.user
      ,
      "featured":
        this.kitchenForm.value.featured

    }

    this.proService.postKitchen(item).subscribe( //change this.kitchenForm.value to item and send to back end.. 
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

  get day() {
    let d = <FormGroup>this.kitchenForm.controls.workdays;
    return d.controls.day;
  }

  get start_time() {
    let s = <FormGroup>this.kitchenForm.controls.workdays;
    return s.controls.start_time;
  }

  get end_time() {
    let e = <FormGroup>this.kitchenForm.controls.workdays;
    return e.controls.end_time;
  }

  get image() {
    return this.kitchenForm.get('image');
  }

  get featured() {
    return this.kitchenForm.get('featured');
  }

  get menuArray() {
    return <FormArray>this.kitchenForm.get('menu');
  }

  get workdaysArray() {
    return <FormArray>this.kitchenForm.get('workdays');
  }





}
