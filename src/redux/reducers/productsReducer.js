import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }

};
const init = {
  prod : []
}

 const delet = (el,array) =>{
     for(let i = 0; i < array.length; i++){
       if(array[i] ==el){
         array.splice(i,i+1);
       }
     }
     return array;
}

export const cartReducer = (state = init,{type, payload}) => {
  let prod = state.prod;
   switch (type) {
     case ActionTypes.CART_PROD:
       prod.push(payload);
       return {...state, prod:prod};
    case ActionTypes.REMV_PROD:
       return delet(payload,state);
    default: return state
   }
}
