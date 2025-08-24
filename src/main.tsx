// Entry point for Trippi React application
// Purpose: Mount React app, provide Router and global providers.
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '@routes/AppRoutes'
import { TrippiProvider } from '@context/TrippiContext'
import '@styles/index.css'

const container = document.getElementById('root')
if (!container) throw new Error('Root container #root not found')

createRoot(container).render(
  <React.StrictMode>
    <TrippiProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TrippiProvider>
  </React.StrictMode>
)