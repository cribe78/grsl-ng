import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GrslHome from './GrslHome.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GrslHome />
  </StrictMode>,
)
