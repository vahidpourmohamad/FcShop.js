import { createStore } from "redux";
import reducers from "./Reducers/index";

const preloadedState = {};
export const store = createStore(
  reducers,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
