// Button: Reusable button component with primary/secondary variants
// Purpose: Provide consistent interactive buttons across the app.
import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
}

export default function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-trippi-teal/40'
  const styles: Record<string, string> = {
    primary: 'bg-trippi-teal text-black hover:bg-trippi-tealDark',
    secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
    ghost: 'text-white/80 hover:text-white hover:bg-white/5',
  }
  return <button className={`${base} ${styles[variant]} ${className}`} {...props} />
}