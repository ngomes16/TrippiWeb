// InvitesPage: Manage trip invites and owner permissions
// Purpose: Accept/deny invites and manage ownership per MVP requirements.
import Card from '@components/common/Card'

export default function InvitesPage() {
  const invites = [
    { id: 'inv1', from: 'Sam', trip: 'Paris 2025', role: 'member' },
    { id: 'inv2', from: 'Riley', trip: 'Lake Tahoe', role: 'owner' },
  ]
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Invites</h2>
      <div className="space-y-3">
        {invites.map(i => (
          <Card key={i.id}>
            <div className="flex items-center justify-between">
              <p><span className="font-medium">{i.from}</span> invited you to <span className="font-medium">{i.trip}</span>{i.role === 'owner' ? ' as owner' : ''}.</p>
              <div className="flex gap-2">
                <button className="btn-primary">Accept</button>
                <button className="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-2 text-white/80 hover:text-white">Decline</button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}