import { Component, OnInit } from '@angular/core';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { Kitchen } from '../../DIservices/kitchen';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public kitchens: any;
  public error = null;

  constructor(private providersService: ProvidersService) {
    this.providersService.getKitchen().subscribe(
      (data) => (this.kitchens = data),
      (error) => (this.error = error),
      () => console.log('Kitchens fetched', this.kitchens)
    );
  }

  ngOnInit(): void {}

  getFeatured(): Kitchen[] {
    return this.kitchens.filter((kitchen: Kitchen) => kitchen.featured);
  }
}
