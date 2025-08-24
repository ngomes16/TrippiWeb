// TrippiContext provides application state for trips and user
// Purpose: Offer a simple in-memory store with mock data until backend is added.
import React, { createContext, useContext, useMemo, useState } from 'react'
import type { Trip, TripId } from '@models'

interface TrippiState {
  trips: Trip[]
  addTrip: (trip: Trip) => void
  getTrip: (id: TripId) => Trip | undefined
}

const TrippiContext = createContext<TrippiState | undefined>(undefined)

const mockTrips: Trip[] = [
  {
    id: 'paris-2025',
    name: 'Paris 2025',
    startDate: '2025-06-10',
    endDate: '2025-06-18',
    members: [
      { id: 'u1', name: 'You' },
      { id: 'u2', name: 'Sam' },
      { id: 'u3', name: 'Riley' },
    ],
    itinerary: [
      { id: 'i1', title: 'Airbnb', category: 'stay', cost: 900, split: 'even' },
      { id: 'i2', title: 'Eiffel Tower', category: 'activity', cost: 120, split: 'even' },
    ],
    budget: {
      totalTarget: 1500,
      totalSaved: 620,
      memberBudgets: [
        { memberId: 'u1', target: 500, saved: 280 },
        { memberId: 'u2', target: 500, saved: 200 },
        { memberId: 'u3', target: 500, saved: 140 },
      ],
    },
    owners: ['u1'],
  },
]

export function TrippiProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>(mockTrips)

  const value = useMemo<TrippiState>(() => ({
    trips,
    addTrip: (trip: Trip) => setTrips(prev => [...prev, trip]),
    getTrip: (id: TripId) => trips.find(t => t.id === id),
  }), [trips])

  return (
    <TrippiContext.Provider value={value}>{children}</TrippiContext.Provider>
  )
}

export function useTrippi() {
  const ctx = useContext(TrippiContext)
  if (!ctx) throw new Error('useTrippi must be used within TrippiProvider')
  return ctx
}