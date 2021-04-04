import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KitchensService } from '../../services/kitchens.service';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.css']
})
export class KitchenListComponent implements OnInit {
  public kitchens: any;
  public errorMsg: any;

  constructor(private kitchensService: KitchensService, private router: Router) { }

  ngOnInit(): void {
    this.kitchensService.getKitchens().subscribe(
      (data) => this.kitchens = data,
      (error) => this.errorMsg = error,
      () => console.log("Complete!")
    );
  }

  kitchenDetail(kitchen: any) {
    this.router.navigate(['/kitchens/', kitchen.id])
  }
}
