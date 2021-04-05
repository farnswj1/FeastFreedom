// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plate } from 'src/app/DIservices/plate';
import { Pipe, PipeTransform } from '@angular/core';

// Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Service
import { ProvidersService } from 'src/app/DIservices/providers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  public id: number;
  public kitchen: any;
  public error: any;
  public order: any[] = [];
  closeResult = '';

  constructor(
    private route: ActivatedRoute,
    private providersService: ProvidersService,
    private modalService: NgbModal
  ) {
    this.id = this.route.snapshot.params.id;
    this.providersService.getKitchen(this.id).subscribe(
      (data) => (this.kitchen = data),
      (error) => (this.error = error),
      () => {
        this.order = this.kitchen.menu.map((plate: Plate) => {
          return {
            id: plate.id,
            count: 0,
          };
        });
      }
    );
  }

  ngOnInit(): void {}

  // Order
  addPlate(id: number): void {
    this.order = this.order.map((plate: any) => {
      plate.count = plate.id === id ? plate.count + 1 : plate.count;
      return plate;
    });
  }
  removePlate(id: number): void {
    this.order = this.order.map((plate: any) => {
      plate.count =
        plate.id === id && plate.count - 1 >= 0 ? plate.count - 1 : plate.count;
      return plate;
    });
  }
  placeOrder(): void {
    this.kitchen.orders.push(this.order);
    this.providersService.postOrder(this.kitchen, this.kitchen.id).subscribe(
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
    return value.filter((plate: any) => plate.id === id)[0].count;
  }
}
