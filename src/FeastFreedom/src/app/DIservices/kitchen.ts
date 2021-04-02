import { Plate } from './plate';

export interface Kitchen {
  id: number;
  user: number;
  name: string;
  email: string;
  working_days: string[];
  time_in: any;
  time_out: any;
  image: string;
  menu: Plate[];
  featured: boolean;
}
