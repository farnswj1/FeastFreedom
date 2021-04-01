import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kitchen } from 'src/app/DIservices/kitchen';
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

  constructor(
    private route: ActivatedRoute,
    private providersService: ProvidersService
  ) {
    this.id = this.route.snapshot.params.id;
    this.providersService.getKitchen(this.id).subscribe(
      (data) => (this.kitchen = data),
      (error) => (this.error = error),
      () => console.log('Kitchen fetched', this.kitchen)
    );
  }

  ngOnInit(): void {}
}
