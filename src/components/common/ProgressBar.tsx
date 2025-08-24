// ProgressBar: Displays numeric progress visually
// Purpose: Represent budgets/savings completion for trips/users.
export default function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value))
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
      <div className="h-full bg-trippi-teal" style={{ width: `${pct}%` }} />
    </div>
  )
}