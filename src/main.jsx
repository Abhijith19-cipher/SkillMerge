import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { PerformanceProvider } from './context/PerformanceContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PerformanceProvider>
        <App />
      </PerformanceProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
