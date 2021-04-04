import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KitchensService } from 'src/app/kitchens/services/kitchens.service';

@Component({
  selector: 'app-kitchen-create',
  templateUrl: './kitchen-create.component.html',
  styleUrls: ['./kitchen-create.component.css']
})
export class KitchenCreateComponent implements OnInit {
  public kitchenForm: any;
  public kitchens: any;
  public errorMsg: any;

  constructor(private fb: FormBuilder, private kitchensService: KitchensService, private router: Router) { }

  ngOnInit(): void {
    this.kitchenForm = this.fb.group({
      user: [0, [
        Validators.required, 
        Validators.min(0), 
      ]],
      name: ["", [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z0-9: ,'&@-]{2,50}$")
      ]],
      featured: [false, [
        Validators.required, 
      ]],
      workdays: [[], [
        Validators.required, 
      ]], 
      start_time: ["08:00:00", [
        Validators.required, 
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern("\\d{2}:\\d{2}:\\d{2}")
      ]],
      end_time: ["20:00:00", [
        Validators.required, 
        Validators.minLength(7),
        Validators.maxLength(8),
        Validators.pattern("\\d{2}:\\d{2}:\\d{2}")
      ]],
      image: [null, []],
      menu: [[], [

      ]]
    });
  }

  onSubmit(kitchenForm: any){
    this.kitchensService.createKitchen(this.kitchenForm.value).subscribe(
      (data) => {
        this.kitchens = data;
        this.kitchensService.getKitchens().subscribe(
          (data) => this.kitchens = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/kitchens']);
    this.kitchenForm.reset();
  }

  get name() {
    return this.kitchenForm.get('name');
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

  get image() {
    return this.kitchenForm.get('image');
  }
}
