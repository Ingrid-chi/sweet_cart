import type { Dessert } from './../data/desserts';

export interface CartItem {
  dessert: Dessert;
  quantity: number;
}
