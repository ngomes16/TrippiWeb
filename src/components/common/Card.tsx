// Card: Simple content container with standard padding and border
// Purpose: Provide consistent card styling for UI sections and widgets.
import React from 'react'

export default function Card({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`card p-5 ${className}`}>
      {children}
    </div>
  )
}