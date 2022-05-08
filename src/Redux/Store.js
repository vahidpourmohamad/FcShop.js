import { configureStore } from "redux";
import reducers from "./Reducers/index";

const preloadedState = {};
export  const  store = configureStore({
  reducer: reducers,
    preloadedState,
});

export default store;
