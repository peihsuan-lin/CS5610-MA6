import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Grid } from './Grid.jsx'
import { CounterProvider } from './CounterProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterProvider>
      <Grid />
    </CounterProvider>
  </StrictMode>,
)
