import { Plate } from './plate';

export interface Kitchen {
  id: number;
  name: string;
  email: string;
  working_days: [number];
  image: string;
  menu: [Plate];
  featured: boolean;
}
