import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  Event as NavigationEvent,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'FeastFreedom';
  public token: any;

  constructor(private router: Router) {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.token = localStorage.getItem('access')
          ? localStorage.getItem('access')
          : null;

        console.log(this.token);
      }
    });
  }
  ngOnInit(): void {}
}