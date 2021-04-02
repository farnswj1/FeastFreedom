import { Plate, plate } from './plate';
import { IKitchenUser } from './providers';
import { User } from '../users/models/user'

export interface Kitchen {
  id: number;
  user: IKitchenUser;
  name: string;
  working_days: string[];
  time_in: any;
  time_out: any;
  image: any;
  menu: Plate[];
  featured: boolean;
}

export class kitchen {
  id: number = 0
  user = new User();
  name: string = '';
  working_days= [""];
  time_in: any;
  time_out: any;
  image: any;
  menu = new plate();
  featured: boolean = false;
}
