import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

console.log(counterReducer);
export const store = configureStore({ reducer: { counter: counterReducer } });
