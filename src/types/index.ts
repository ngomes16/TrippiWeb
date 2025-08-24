// Shared TypeScript types for Trippi
// Purpose: Define core domain types used across pages and services.
export type UserId = string
export type TripId = string

export interface Member {
  id: UserId
  name: string
  avatarUrl?: string
}

export interface ItineraryItem {
  id: string
  title: string
  category: 'stay' | 'flight' | 'activity' | 'food' | 'transport' | 'other'
  cost: number
  payer?: UserId
  split: 'even' | 'custom'
}

export interface MemberBudget {
  memberId: UserId
  target: number
  saved: number
}

export interface TripBudget {
  totalTarget: number
  totalSaved: number
  memberBudgets: MemberBudget[]
}

export interface Trip {
  id: TripId
  name: string
  startDate?: string
  endDate?: string
  members: Member[]
  itinerary: ItineraryItem[]
  budget: TripBudget
  owners: UserId[]
}