import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { CvProvider } from './contexts/CvProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <CvProvider>
        <App />
      </CvProvider>
  </StrictMode>,
)
