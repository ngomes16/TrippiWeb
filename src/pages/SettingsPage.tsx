// SettingsPage: App preferences and account settings
// Purpose: Provide UI for toggles and profile settings (placeholder for MVP).
import Card from '@components/common/Card'

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-white/70">Always on for now</p>
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">Default</span>
        </div>
      </Card>
    </div>
  )
}