import { IPlate, Plate } from './plate';
import { IKitchenUser } from './providers';
import { User } from '../users/models/user';

export interface Kitchen {
  user: IKitchenUser;
  name: string;
  workingdays: any;
  menu: any;
  featured: boolean;
}

export class kitchen {
  user = new User();
  name: string = '';
  workingdays = [''];
  menu: any;
  featured: boolean = false;
}
