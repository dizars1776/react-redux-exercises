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
