import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UsersService]
})
export class UserLoginComponent implements OnInit {
  public userForm: any;
  public user: any;
  public id: any;
  public errorMsg: any;

  constructor(private fb: FormBuilder,private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      username: "",
      password: ""
    }
    this.userForm = this.fb.group({
      username: ["", [
        Validators.required, 
      ]],
      password: ["", [
        Validators.required, 
      ]]
    });
  }

  onSubmit(userForm: any){
   
  }

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  usersList(){
    this.router.navigate(['/users'])
  }
}
