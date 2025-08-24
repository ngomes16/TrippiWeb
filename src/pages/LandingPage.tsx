// LandingPage: Marketing splash introducing Trippi
// Purpose: Provide a modern hero area and key benefits to engage users.
import { Link } from 'react-router-dom'
import Card from '@components/common/Card'

export default function LandingPage() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-trippi-teal/10 via-neutral-900 to-neutral-950 p-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/50 px-4 py-2 text-sm text-white/80">
            <img src="/Trippi_logo.png" className="h-6 w-6" alt="logo" />
            Budget together. Travel better.
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Plan unforgettable trips and track every dollar together</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">Create trips, invite friends, split costs fairly, and hit savings goals with live progress. Trippi keeps your plans and budgets in one place.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/trips" className="btn-primary">Start a Trip</Link>
            <Link to="/planner" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-white/80 hover:text-white">Explore Planner</Link>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-trippi-teal/20 blur-3xl" />
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[{
          title: 'Group Budgets',
          body: 'Set shared goals from your itinerary and watch progress update in real time.'
        },{
          title: 'Smart Splits',
          body: 'Even or custom splits per item. Gift or cover costs with confirmations.'
        },{
          title: 'Itinerary & Savings',
          body: 'Keep plans, costs, and savings deeply linked so nothing gets missed.'
        }].map((f) => (
          <Card key={f.title}>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-white/80">{f.body}</p>
          </Card>
        ))}
      </section>
    </div>
  )
}