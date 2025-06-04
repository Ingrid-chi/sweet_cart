import type { Dessert } from '../types/dessert';

export interface CartItem extends Dessert {
  quantity: number;
}
