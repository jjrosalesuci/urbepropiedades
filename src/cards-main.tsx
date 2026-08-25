import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Cards } from '@/pages/Cards'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Cards />
  </StrictMode>,
)
