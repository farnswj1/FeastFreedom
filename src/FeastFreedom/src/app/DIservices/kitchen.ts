import { IKitchenUser } from './providers';
import { User } from '../users/models/user';

export interface Kitchen {
  id: number;
  user: IKitchenUser;
  name: string;
  working_days: any[];
  time_in: any;
  time_out: any;
  image: any;
  menu: any;
  featured: boolean;
  orders: any[];
}

export class kitchen {
  id: number = 0;
  user = new User();
  name: string = '';
  working_days = [''];
  time_in: any;
  time_out: any;
  image: any;
  menu = [
    {
      name: ' ',
      vegan: false,
      price: 0,
    },
  ];
  featured: boolean = false;
}
