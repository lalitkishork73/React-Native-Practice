import {addToCart, removeToCart, User_List} from './constants';

export function AddToCart(item: any) {
  return {
    type: addToCart,
    data: item,
  };
}
export function RemoveToCart(item: any) {
  return {
    type: removeToCart,
    data: item,
  };
}

export function getUserList() {
  return {
    type: User_List,
  };
}
