import { Plate } from './plate';

export interface Kitchen {
  id: number;
  name: string;
  email: string;
  working_days: [number];
  time_in:any;
  time_out:any;
  image: string;
  menu: [Plate];
  featured: boolean;
}
