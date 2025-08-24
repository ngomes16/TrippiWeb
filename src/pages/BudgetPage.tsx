// BudgetPage: Global budget overview and controls
// Purpose: Summarize savings across trips and allow donations/gifting actions per MVP.
import Card from '@components/common/Card'
import ProgressBar from '@components/common/ProgressBar'

export default function BudgetPage() {
  const overallSaved = 4230
  const overallTarget = 10000
  const pct = Math.round((overallSaved / overallTarget) * 100)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Budget Overview</h2>
      <Card>
        <div className="space-y-3">
          <ProgressBar value={pct} />
          <p className="text-white/80">${overallSaved.toLocaleString()} / ${overallTarget.toLocaleString()} ({pct}%)</p>
        </div>
      </Card>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="text-lg font-semibold">Donate to Group Costs</h3>
          <p className="mt-2 text-sm text-white/80">Help everyone reach the goal faster. Donations spread evenly across members.</p>
          <div className="mt-3 flex gap-2">
            <button className="btn-primary">Donate $25</button>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-white/80 hover:text-white">Custom</button>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold">Gift a Friend</h3>
          <p className="mt-2 text-sm text-white/80">Send money to cover someone’s savings with their approval.</p>
          <div className="mt-3 flex gap-2">
            <button className="btn-primary">Gift $20</button>
            <button className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-white/80 hover:text-white">Choose Friend</button>
          </div>
        </Card>
      </div>
    </div>
  )
}