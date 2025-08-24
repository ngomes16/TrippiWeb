// PlannerPage: Plan trip itinerary items and categories
// Purpose: Provide UI to add/edit items that feed budgets and splits.
import Card from '@components/common/Card'
import Button from '@components/common/Button'

export default function PlannerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Planner</h2>
        <Button>Add Item</Button>
      </div>
      <Card>
        <p className="text-white/80">Design your itinerary here. Add stays, flights, activities, and more. These items will form the basis of your group's budget and savings goals.</p>
      </Card>
    </div>
  )
}