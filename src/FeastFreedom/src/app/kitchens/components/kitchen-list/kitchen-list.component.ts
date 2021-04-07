import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { KitchensService } from '../../services/kitchens.service';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.css'],
})
export class KitchenListComponent implements OnInit {
  public kitchens: any;
  public errorMsg: any;
  public user: any;

  constructor(
    private kitchensService: KitchensService,
    private router: Router,
    private providersService: ProvidersService
  ) {
    this.kitchensService.getKitchens().subscribe(
      (data) => (this.kitchens = data),
      (error) => (this.errorMsg = error),
      () => console.log('Complete!')
    );
  }

  ngOnInit(): void {
    // this.providersService.
  }

  kitchenDetail(kitchen: any): void {
    this.router.navigate(['/kitchens/', kitchen.id]);
  }

  kitchenCreate(): void {
    this.router.navigate(['/kitchens/register/']);
  }
}
