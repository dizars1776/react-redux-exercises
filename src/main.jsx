import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './state/Store'
import './index.css'
import { incrementCounter } from './state/CounterState'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(incrementCounter(20))
