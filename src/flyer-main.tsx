import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FlyerPage } from './pages/FlyerPage'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <FlyerPage />
  </StrictMode>,
)
