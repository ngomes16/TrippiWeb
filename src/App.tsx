// App: High-level wrapper to provide app-wide providers
// Purpose: Wrap routes with TrippiProvider; not used directly by index but kept for future extension.
import { BrowserRouter } from 'react-router-dom'
import { TrippiProvider } from '@context/TrippiContext'
import AppRoutes from '@routes/AppRoutes'

export default function App() {
  return (
    <TrippiProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TrippiProvider>
  )
}