// Navbar renders the top navigation with brand and quick links
// Purpose: Provide primary navigation and brand identity at the top of every page.
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Trippi_logo.png" alt="Trippi" className="h-9 w-9" />
          <span className="text-xl font-semibold tracking-tight">Trippi</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/trips" className={({isActive}) => isActive ? 'text-trippi-teal' : 'text-white/80 hover:text-white'}>Trips</NavLink>
          <NavLink to="/planner" className={({isActive}) => isActive ? 'text-trippi-teal' : 'text-white/80 hover:text-white'}>Planner</NavLink>
          <NavLink to="/budget" className={({isActive}) => isActive ? 'text-trippi-teal' : 'text-white/80 hover:text-white'}>Budget</NavLink>
          <NavLink to="/invites" className={({isActive}) => isActive ? 'text-trippi-teal' : 'text-white/80 hover:text-white'}>Invites</NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? 'text-trippi-teal' : 'text-white/80 hover:text-white'}>Settings</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/trips" className="btn-primary">New Trip</Link>
        </div>
      </div>
    </header>
  )
}