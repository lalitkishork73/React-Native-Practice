import {SET_USERDATA, addToCart, removeToCart} from './constants';

const initialState: any = [];

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case addToCart:
      return [...state, action.data];

    case removeToCart:
      let result = state.filter((elem: any) => elem.id !== action.data.id);
      return [...result];

    case SET_USERDATA:
      return [...state, action.data];

    default:
      return state;
  }
};
