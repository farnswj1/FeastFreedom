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
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.token = localStorage.getItem('access')
          ? localStorage.getItem('access')
          : null;

        this.user = this.token ? this.providersService.getUser() : null;
      }
    });

    localStorage.getItem('access')
      ? (this.isLoggedIn = true)
      : this.providersService
          .isLoggedIn()
          .subscribe((data) => (this.isLoggedIn = data));
  }
  logout(): void {
    this.providersService.logOut();
    this.isCollapsed = true;
    this.router.navigate(['/']);
  }
}
