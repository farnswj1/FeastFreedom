import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-regular-user-list',
  templateUrl: './regular-user-list.component.html',
  styleUrls: ['./regular-user-list.component.css']
})
export class RegularUserListComponent implements OnInit {
  public regularUsers: any;
  public errorMsg: any;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getRegularUsers().subscribe(
      (data) => this.regularUsers = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }

}
