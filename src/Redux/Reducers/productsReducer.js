import { ActionTypes } from "../Constants/actionType";

const initialState = {
    products:[]
}
export const productReducer = (state= initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GetAllProducts:
      return state;
    case ActionTypes.SelectedProduct:
      return state;
    case ActionTypes.GetProductsCategory:
      return state;
    default:
      break;
  }
};