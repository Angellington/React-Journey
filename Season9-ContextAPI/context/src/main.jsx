import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleColorContextProvider>
    <CounterContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CounterContextProvider>
    </TitleColorContextProvider>
  </StrictMode>,
)
