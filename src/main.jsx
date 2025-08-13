import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PORTFOLIO from './Screens/Portfolio'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PORTFOLIO></PORTFOLIO>
  </StrictMode>,
)
