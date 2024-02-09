import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Router } from 'react-router-dom'
import { Datos } from './context/Context'


ReactDOM.render(
  <React.StrictMode>
    <Datos>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Datos>
  </React.StrictMode>,
  document.getElementById('root')
)
