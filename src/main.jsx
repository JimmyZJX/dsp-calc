import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '../css/styles.scss'
import '../css/App.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/js/dist/dropdown.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)