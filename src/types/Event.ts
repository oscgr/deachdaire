import { v4 } from 'uuid'

export interface Event {
  id: string
  description: string
  timestamp: string
  duration?: string // Infinite if no value
}

export interface RelationshipModifierEvent extends Event {
  value: number
}

// export class RulerModifierEvent extends Event {
//   duration: string
// }
