import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./CounterState";
import { todosReducer } from "./TodosState";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
})

const store = configureStore({ reducer: rootReducer })

export default store