// AppShell component provides the global layout (Navbar + Sidebar + Content)
// Purpose: Define consistent app chrome and responsive layout across all pages.
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import React from 'react'

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <aside className="hidden w-64 shrink-0 md:block">
          <Sidebar />
        </aside>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}