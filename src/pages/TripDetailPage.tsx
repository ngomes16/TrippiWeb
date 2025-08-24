// TripDetailPage: Detailed view of a single trip with itinerary and budget
// Purpose: Allow managing itinerary items, splits, and viewing member savings progress.
import { useParams } from 'react-router-dom'
import { useTrippi } from '@context/TrippiContext'
import Card from '@components/common/Card'
import ProgressBar from '@components/common/ProgressBar'

export default function TripDetailPage() {
  const { tripId } = useParams()
  const { getTrip } = useTrippi()
  const trip = getTrip(tripId || '')

  if (!trip) return <div className="text-white/80">Trip not found.</div>

  const pct = Math.round((trip.budget.totalSaved / trip.budget.totalTarget) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">{trip.name}</h2>
          <p className="text-white/70">{trip.startDate} – {trip.endDate} · {trip.members.length} members</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-semibold">Itinerary</h3>
          <ul className="mt-4 divide-y divide-white/10">
            {trip.itinerary.map(item => (
              <li key={item.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-white/70">{item.category} · ${item.cost}</p>
                </div>
                <button className="text-sm text-white/80 hover:text-white">Edit</button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="btn-primary">Add Item</button>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Budget</h3>
          <div className="mt-3 space-y-2">
            <ProgressBar value={pct} />
            <p className="text-sm text-white/80">${trip.budget.totalSaved.toLocaleString()} / ${trip.budget.totalTarget.toLocaleString()} ({pct}%)</p>
          </div>
          <div className="mt-4">
            <h4 className="mb-2 text-sm font-semibold text-white/70">Members</h4>
            <ul className="space-y-2">
              {trip.budget.memberBudgets.map(b => {
                const member = trip.members.find(m => m.id === b.memberId)
                const p = Math.round((b.saved / b.target) * 100)
                return (
                  <li key={b.memberId} className="rounded-xl bg-white/5 p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{member?.name}</span>
                      <span className="text-sm text-white/80">${b.saved} / ${b.target}</span>
                    </div>
                    <div className="mt-2"><ProgressBar value={p} /></div>
                  </li>
                )
              })}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  )
}