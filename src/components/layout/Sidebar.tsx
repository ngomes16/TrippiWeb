// Sidebar renders contextual navigation and quick stats widgets
// Purpose: Provide secondary navigation and at-a-glance info for trips and budgets.
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="space-y-4">
      <section className="card p-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Quick Actions</h3>
        <div className="grid grid-cols-1 gap-2">
          <Link to="/trips" className="btn-primary">Create Trip</Link>
          <Link to="/planner" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-white/80 hover:text-white">Plan Itinerary</Link>
        </div>
      </section>
      <section className="card p-4">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/70">Overview</h3>
        <ul className="space-y-2 text-sm text-white/80">
          <li className="flex items-center justify-between"><span>Active Trips</span><span className="font-medium text-white">3</span></li>
          <li className="flex items-center justify-between"><span>Group Members</span><span className="font-medium text-white">12</span></li>
          <li className="flex items-center justify-between"><span>Total Saved</span><span className="font-medium text-trippi-teal">$4,230</span></li>
        </ul>
      </section>
    </div>
  )
}