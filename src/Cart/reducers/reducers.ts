import { ADD_CART } from '../actions/ADD_CART';
import { INITIAL_STATE } from '../actions/INITIAL_STATE';
import { REMOVE_CART } from '../actions/REMOVE_CART';
import { REMOVE_CARTS_ITEMS } from '../actions/REMOVE_CARTS_ITEMS';

export interface ICartContent {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}
export enum ActionType {
  ADD_CART = 'ADD_CART',
  INITIAL_STATE = 'INITIAL_STATE',
  REMOVE_CART = 'REMOVE_CART',
  REMOVE_CARTS_ITEMS = 'REMOVE_CARTS_ITEMS',
}

export interface IState {
  cart: ICartContent[];
}

export interface IACTIONS {
  type:
    | ActionType.ADD_CART
    | ActionType.INITIAL_STATE
    | ActionType.REMOVE_CART
    | ActionType.REMOVE_CARTS_ITEMS;
  content: IState;
}

export function reducer(state: IState, action: IACTIONS) {
  switch (action.type) {
    case ActionType.ADD_CART:
      return ADD_CART(state, action.content);
    case ActionType.REMOVE_CART:
      return REMOVE_CART(state, action.content);
    case ActionType.REMOVE_CARTS_ITEMS:
      return REMOVE_CARTS_ITEMS(state, action.content);
    case ActionType.INITIAL_STATE:
      return INITIAL_STATE(action.content);

    default:
      return state;
  }
}
