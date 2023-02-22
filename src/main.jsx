import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './state/Store'
import './index.css'
import counterState from './state/CounterState'
import todosState from './state/TodosState'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// store.subscribe(() => {
//   console.log(store.getState())
// })

// store.dispatch(counterState.actions.increment(5))
// store.dispatch(counterState.actions.increment(20))
// store.dispatch(counterState.actions.decrement(1))
// store.dispatch(counterState.actions.reset())

// store.dispatch(todosState.actions.add({ id: 1, title: 'water the plants', completed: false }))
// store.dispatch(todosState.actions.add({ id: 2, title: 'go to the gym', completed: true }))

// store.dispatch(todosState.actions.remove(1))
// store.dispatch(todosState.actions.edit({ id: 2, data: { title: 'cycle to the gym'} }))
