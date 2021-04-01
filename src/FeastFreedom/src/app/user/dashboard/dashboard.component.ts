import { Component, OnInit } from '@angular/core';
import { KitchensService } from 'src/app/DIservices/kitchens.service';
import { Kitchen } from '../../DIservices/kitchen';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public kitchens: any;
  public error = null;

  constructor(private kitchensService: KitchensService) {
    this.kitchensService.getKitchens().subscribe(
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
