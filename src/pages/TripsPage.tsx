// TripsPage: Show a list of trips with high-level budgets and progress
// Purpose: Provide entry to existing trips and quick creation CTA.
import Card from '@components/common/Card'
import Button from '@components/common/Button'
import ProgressBar from '@components/common/ProgressBar'
import { useTrippi } from '@context/TrippiContext'
import { Link } from 'react-router-dom'

export default function TripsPage() {
  const { trips } = useTrippi()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Your Trips</h2>
        <Button>Create Trip</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {trips.map((trip) => {
          const pct = Math.round((trip.budget.totalSaved / trip.budget.totalTarget) * 100)
          return (
            <Card key={trip.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{trip.name}</h3>
                  <p className="text-sm text-white/80">{trip.startDate} – {trip.endDate}</p>
                </div>
                <Link className="btn-primary" to={`/trips/${trip.id}`}>Open</Link>
              </div>
              <div className="mt-4 space-y-2">
                <ProgressBar value={pct} />
                <p className="text-sm text-white/80">${trip.budget.totalSaved.toLocaleString()} saved of ${trip.budget.totalTarget.toLocaleString()} ({pct}%)</p>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}