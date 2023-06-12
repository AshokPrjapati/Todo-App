import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {reducer} from "./todo/todo.reducer"

// Declare a global interface to extend the Window object
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose; // Redux DevTools extension compose function
  }
}

// Get the Redux DevTools extension compose or fallback to the default compose function
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store 
export const store = legacy_createStore(
    reducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Define the RootState type by extracting the state type from the store
export type RootState = ReturnType<typeof store.getState>;