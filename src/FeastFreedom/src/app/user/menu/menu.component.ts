import { Component, Input, OnInit } from '@angular/core';
import { Plate } from 'src/app/DIservices/plate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Input() menu: Plate[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
