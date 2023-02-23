import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import store from './state/Store'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// store.subscribe(() => {
//   console.log(store.getState())
// })
