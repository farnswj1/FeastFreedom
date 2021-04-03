import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-list',
  templateUrl: './kitchen-user-list.component.html',
  styleUrls: ['./kitchen-user-list.component.css']
})
export class KitchenUserListComponent implements OnInit {
  public kitchenUsers: any;
  public errorMsg: any;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getKitchenUsers().subscribe(
      (data) => this.kitchenUsers = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }

  kitchenUserCreate() {
    this.router.navigate(['users/kitchens/register'])
  }

  kitchenUserDetail(kitchenUser: any) {
    this.router.navigate(['/users/kitchens/', kitchenUser.id])
  }
}
