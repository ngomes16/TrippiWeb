// AppRoutes defines the client-side routes and wraps pages in the AppShell
// Purpose: Centralize navigation and route components using React Router v6.
import { Route, Routes, Navigate } from 'react-router-dom'
import AppShell from '@components/layout/AppShell'
import LandingPage from '@pages/LandingPage'
import TripsPage from '@pages/TripsPage'
import TripDetailPage from '@pages/TripDetailPage'
import PlannerPage from '@pages/PlannerPage'
import BudgetPage from '@pages/BudgetPage'
import InvitesPage from '@pages/InvitesPage'
import SettingsPage from '@pages/SettingsPage'

export default function AppRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/trips/:tripId" element={<TripDetailPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/invites" element={<InvitesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  )
}