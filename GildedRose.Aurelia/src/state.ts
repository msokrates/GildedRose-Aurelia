import { Item } from './models/item';

export interface State {
  shopItems: Item[];
  days: number;
}

export class State {
  shopItems: Item[] = [];
  days: number;
}
