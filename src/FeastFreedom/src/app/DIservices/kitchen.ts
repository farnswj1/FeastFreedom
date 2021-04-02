import { Plate } from './plate';
import { IKitchenUser } from './providers';

export interface Kitchen {
  id: number;
  user: IKitchenUser;
  name: string;
  email: string;
  working_days: string[];
  time_in: any;
  time_out: any;
  image: string;
  menu: Plate[];
  featured: boolean;
}
