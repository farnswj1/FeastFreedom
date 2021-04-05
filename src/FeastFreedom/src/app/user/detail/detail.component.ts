// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plate } from 'src/app/DIservices/plate';
import { Pipe, PipeTransform } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Service
import { ProvidersService } from 'src/app/DIservices/providers.service';
import { Order } from 'src/app/DIservices/order';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public id: number;
  public kitchen: any;
  public error: any;
  public order: Order = {
    id: 0,
    kitchen_id: 0,
    user_id: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private providersService: ProvidersService,
    private modalService: NgbModal
  ) {
    // Gets kitchen id
    this.id = this.route.snapshot.params.id;
    // Gets kitchen
    this.providersService.getKitchen(this.id).subscribe(
      // Defines kitchen
      (data) => (this.kitchen = data),
      // Defines error
      (error) => (this.error = error),
      () => {
        // Defines plates and initialices count to 0
        const orderBody = this.kitchen.menu.map((plate: Plate) => {
          return { plate_id: plate.id, count: 0 };
        });

        // Defines order
        this.order = {
          id: Date.now(),
          kitchen_id: this.kitchen.id,
          user_id: this.providersService.getUser(),
          order: orderBody,
        };
      }
    );
  }

  ngOnInit(): void {}

  // Order
  addPlate(id: number): void {
    if (this.order.order) {
      this.order.order = this.order.order.map((plate: any) => {
        plate.count = plate.plate_id === id ? plate.count + 1 : plate.count;
        return plate;
      });
    }
  }
  removePlate(id: number): void {
    if (this.order.order) {
      this.order.order = this.order.order.map((plate: any) => {
        plate.count =
          plate.plate_id === id && plate.count - 1 >= 0
            ? plate.count - 1
            : plate.count;
        return plate;
      });
    }
  }
  placeOrder(): void {
    this.providersService.postOrder(this.order).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => console.log('Posted')
    );
    console.log(this.order);
  }

  // Modal
  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
}

// Count plates in order pipe
@Pipe({
  name: 'getCount',
})
export class GetCountPipe implements PipeTransform {
  public constructor() {}

  transform(value: Array<any>, id: number): any {
    return value.filter((plate: any) => plate.plate_id === id)[0].count;
  }
}
