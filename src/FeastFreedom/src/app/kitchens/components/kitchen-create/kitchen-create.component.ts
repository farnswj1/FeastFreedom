import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private kitchensService: KitchensService, private router: Router, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.kitchenForm = this.fb.group({
      user: new FormControl(0, [
        Validators.required, 
        Validators.min(0), 
      ]),
      name: new FormControl("", [
        Validators.required, 
        Validators.minLength(2), 
        Validators.maxLength(50),
        Validators.pattern("^[A-Za-z0-9: ,'&@-]{2,50}$")
      ]),
      featured: new FormControl(false, [
        Validators.required, 
      ]),
      workdays: new FormArray([
        new FormGroup({
          day: new FormControl("", [
            Validators.required,
            Validators.min(6),
            Validators.max(9),
            Validators.pattern("^(Mon|Tues|Wednes|Thurs|Fri|Satur)day$")
          ]),
          start_time: new FormControl("", [
            Validators.required,
            Validators.min(7),
            Validators.max(8),
            Validators.pattern("^(1[012]|[1-9]):[0-5]\d [AP]M$")
          ]),
          end_time: new FormControl("", [
            Validators.required,
            Validators.min(7),
            Validators.max(8),
            Validators.pattern("^(1[012]|[1-9]):[0-5]\d [AP]M$")
          ])
        })
      ]),
      menu: new FormArray([
        new FormGroup({
          name: new FormControl("", [
            Validators.required,
            Validators.min(3),
            Validators.max(50),
            Validators.pattern("^[A-Za-z0-9 //,'-]{3,50}$")
          ]),
          vegan: new FormControl(false, Validators.required),
          price: new FormControl(0, [
            Validators.required,
            Validators.min(0),
            Validators.max(1000000)
          ])
        })
      ]),
      image: ["", Validators.required]
    });
  }

  addWorkDay() {
    const control = new FormGroup({
      day: new FormControl("", [
        Validators.required,
        Validators.min(6),
        Validators.max(9),
        Validators.pattern("^(Mon|Tues|Wednes|Thurs|Fri|Satur)day$")
      ]),
      start_time: new FormControl("", [
        Validators.required,
        Validators.min(7),
        Validators.max(8),
        Validators.pattern("^(1[012]|[1-9]):[0-5]\d [AP]M$")
      ]),
      end_time: new FormControl("", [
        Validators.required,
        Validators.min(7),
        Validators.max(8),
        Validators.pattern("^(1[012]|[1-9]):[0-5]\d [AP]M$")
      ])
    });
    this.workdays.push(control);
  }

  removeWorkDay(index: number) {
    this.workdays.removeAt(index);
  }

  addMenuItem() {
    const control = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.min(3),
        Validators.max(50),
        Validators.pattern("^[A-Za-z0-9 //,'-]{3,50}$")
      ]),
      vegan: new FormControl(false, Validators.required),
      price: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(1000000)
      ])
    });
    this.menu.push(control);
  }

  removeMenuItem(index: number) {
    this.menu.removeAt(index);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.kitchenForm.patchValue({image: reader.result});
      }
      //this.kitchenForm.controls['image'].setValue(event.target.files[0]);
    }
  }

  onSubmit(kitchenForm: any){
    this.kitchensService.createKitchen(this.kitchenForm.value).subscribe(
      (data) => {
        this.kitchens = data;
        this.kitchensService.getKitchens().subscribe(
          (data) => {
            this.kitchens = data;
            this.router.navigate(['/kitchens']);
            this.kitchenForm.reset();
          },
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
  }
  
  get name() {
    return this.kitchenForm.get('name');
  }

  get workdays() {
    return this.kitchenForm.get('workdays') as FormArray;
  }

  get menu() {
    return this.kitchenForm.get('menu') as FormArray;
  }

  get image() {
    return this.kitchenForm.get('image');
  }
}