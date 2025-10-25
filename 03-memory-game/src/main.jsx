import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScoreContextProvider } from './context/ScoreContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </StrictMode>,
)
