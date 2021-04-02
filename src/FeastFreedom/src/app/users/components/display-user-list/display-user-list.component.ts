import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-user-list',
  templateUrl: './display-user-list.component.html',
  styleUrls: ['./display-user-list.component.css']
})
export class DisplayUserListComponent implements OnInit {

  constructor() { }

  @Input() users: any;

  ngOnInit(): void {
  }

}
