import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterState";

const store = configureStore({ reducer: counterReducer })

export default store