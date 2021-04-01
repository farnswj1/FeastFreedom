import { Component, Injector, Input, OnInit } from '@angular/core';
import { Kitchen } from 'src/app/DIservices/kitchen';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css'],
})
export class KitchenComponent implements OnInit {
  @Input() props: [kitchen: Kitchen, parent: string] | undefined;
  public kitchen: Kitchen | undefined;
  // @Input() kitchen: Kitchen | undefined;
  public parent: string | undefined;

  constructor() {}

  ngOnInit(): void {
    if (this.props) {
      this.kitchen = this.props[0];
      this.parent = this.props[1];
    }
  }
}
