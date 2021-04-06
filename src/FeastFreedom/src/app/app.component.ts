import { Component } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';
import { ProvidersService } from './DIservices/providers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FeastFreedom';
  public token: any;
  public user: any;
  public isCollapsed = true;

  public isLoggedIn = false;

  constructor(
    private router: Router,
    private providersService: ProvidersService
  ) {
    this.providersService.isLoggedIn().subscribe((data) => {
      this.isLoggedIn = data;
      this.isLoggedIn
        ? this.providersService.getUser().subscribe(
            (user: any) => (this.user = user[0]),
            (error) => console.log(error)
          )
        : (this.user = null);
    });
  }
  logout(): void {
    this.providersService.logOut();
    this.isCollapsed = true;
  }
}
