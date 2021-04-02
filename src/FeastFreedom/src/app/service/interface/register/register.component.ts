import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private proService: ProvidersService, private router: Router) {

  }

  ngOnInit(): void {
    this.kitchenForm = this.fb.group({
      name: [this.name],
      user: [this.user],
      workdays: ['', [Validators.required, Validators.minLength(3)]], //testing validations NOT FINAL YET
      start_time: ['', [Validators.required, Validators.minLength(3)]],
      end_time: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      menu: this.fb.group({
        name: [],
        vegan: [],
        price: []
      }),
      image: [''],
    });
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
    this.router.navigate(['']); //edit here child (next) click
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

  get menu() {
    return this.kitchenForm.get('menu');
  }

  get image() {
    return this.kitchenForm.get('image');
  }


}
