import { Component, Input, OnInit } from '@angular/core';
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
  public daysOfTheWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wendnesday',
    'thursday',
    'friday',
    'saturday',
  ];

  constructor() {}

  workingDay(day: string): boolean {
    if (this.kitchen) {
      const match = this.kitchen.working_days.filter(
        (workingDay: any) => workingDay.day === day
      );
      return match.length > 0 ? true : false;
    }
    return false;
  }

  ngOnInit(): void {
    if (this.props) {
      this.kitchen = this.props[0];
      this.parent = this.props[1];
    }

    this.workingDay('monday');
  }
}
