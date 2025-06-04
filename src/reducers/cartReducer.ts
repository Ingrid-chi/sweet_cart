import type { Dessert } from '../types/dessert';
import type { CartItem } from '../types/cart';

export type Action =
  | { type: 'ADD_TO_CART'; payload: Dessert }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'INCREASE_QUANTITY'; payload: { id: string } }
  | { type: 'DECREASE_QUANTITY'; payload: { id: string } };

export const cartReducer = (state: CartItem[], action: Action): CartItem[] => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.find((item) => item.id === action.payload.id);
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }

    case 'REMOVE_FROM_CART': {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case 'INCREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case 'DECREASE_QUANTITY':
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      );

    default:
      return state;
  }
};
