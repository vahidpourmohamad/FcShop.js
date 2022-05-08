import { ActionTypes } from "../Constants/actionType";
export const GetAllProducts = (products) => {
    return {
      type: ActionTypes.GetAllProducts,
      payload: products,
    };
}
export const SelectedProduct = (product) => {
  return {
    type: ActionTypes.SelectedProduct,
    payload: product,
  };
};

export const GetProductsCategory = (products) => {
  return {
    type: ActionTypes.GetProductsCategory,
    payload: products,
  };
};