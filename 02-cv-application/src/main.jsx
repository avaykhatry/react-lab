import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Cv from './Cv.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cv />
  </StrictMode>,
)
