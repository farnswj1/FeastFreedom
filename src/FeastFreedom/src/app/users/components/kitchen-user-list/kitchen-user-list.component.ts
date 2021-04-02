import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-kitchen-user-list',
  templateUrl: './kitchen-user-list.component.html',
  styleUrls: ['./kitchen-user-list.component.css']
})
export class KitchenUserListComponent implements OnInit {
  public kitchenUsers: any;
  public errorMsg: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getRegularUsers().subscribe(
      (data) => this.kitchenUsers = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }
}
