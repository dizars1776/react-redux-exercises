import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterState from "./CounterState";
import todosState from "./TodosState";

const rootReducer = combineReducers({
  counter: counterState.reducer,
  todos: todosState.reducer,
})

const store = configureStore({ reducer: rootReducer })

export default store