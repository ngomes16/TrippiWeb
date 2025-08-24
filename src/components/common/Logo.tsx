// Logo: Trippi logo component with optional label
// Purpose: Provide a consistent brand mark used across the UI.
export default function Logo({ showLabel = false, size = 36 }: { showLabel?: boolean; size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <img src="/Trippi_logo.png" width={size} height={size} alt="Trippi" />
      {showLabel && <span className="text-lg font-semibold">Trippi</span>}
    </div>
  )
}