import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './state/Store'
import './index.css'
import { incrementCounter } from './state/CounterState'
import { addTodos, editTodos, removeTodos } from './state/TodosState'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(incrementCounter(20))

store.dispatch(addTodos({ id: 1, title: 'water the plants', completed: false }))
store.dispatch(addTodos({ id: 2, title: 'go to the gym', completed: true }))

store.dispatch(removeTodos(1))
store.dispatch(editTodos(2,{title: 'cycle to the gym', completed: false}))


