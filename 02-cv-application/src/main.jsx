import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CvProvider } from './contexts/CvProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CvProvider>
        <App />
    </CvProvider>
    </BrowserRouter>
  </StrictMode>,
)
