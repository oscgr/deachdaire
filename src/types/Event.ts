import {v4} from 'uuid';

export class Event {
  id: string
  description: string
  timestamp: string
  duration?: string // Infinite if no value
  constructor(description: string, duration?: string) {
    this.id = v4()
    this.timestamp = 'PLACEHOLDER'
    this.description = description
    this.duration = duration
  }
}

export class RelationshipModifierEvent extends Event {
  value: number
  constructor(description: string, value: number, duration?: string) {
    super(description, duration);
    this.value = value
  }
}

// export class RulerModifierEvent extends Event {
//   duration: string
// }
