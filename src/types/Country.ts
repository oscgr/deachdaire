import type { RelationshipModifierEvent } from './Event'

// export enum Origin {
//   NORTH_AMERICA = "NORTH_AMERICA",
//   CENTRAL_AMERICA = "CENTRAL_AMERICA",
//   CARIBBEAN = "CARIBBEAN",
//   SOUTH_AMERICA = "SOUTH_AMERICA",
//   MAGHREB = "MAGHREB",
//   SUB_SAHARAN_AFRICA = "SUB_SAHARAN_AFRICA",
//   SOUTHERN_AFRICA = "SOUTHERN_AFRICA",
//   MIDDLE_EAST = "MIDDLE_EAST",
//   EASTERN_EUROPE = "EASTERN_EUROPE",
//   WESTERN_EUROPE = "WESTERN_EUROPE",
//   SOUTHEAST_ASIA = "SOUTHEAST_ASIA",
//   EASTERN_ASIA = "EASTERN_ASIA",
//   SOUTHERN_ASIA = "SOUTHERN_ASIA",
//   AUSTRALASIA = "AUSTRALASIA",
// }
//
// export enum Ideology {
//   REPUBLIC = "REPUBLIC",
//   MONARCHY = "MONARCHY",
// }

export enum Regime {
  TOTALITARIAN = 'TOTALITARIAN',
  AUTHORITARIAN = 'AUTHORITARIAN',
  FLAWED_DEMOCRACY = 'FLAWED_DEMOCRACY',
  FULL_DEMOCRACY = 'FULL_DEMOCRACY',
}

export interface Country {
  // fixed
  id: string
  name: string
  // origin: Origin

  // semi-fixed
  regime: Regime
  // var
  modifiers: RelationshipModifierEvent[]

  stability?: number // unused
  // relation: number // % (-100 - enemy, 100 - BFF)

}
// export class Country {
//   // fixed
//   id: string
//   name: string
//   origin: Origin
//
//   // semi-fixed
//   ideology: Ideology
//   regime: Regime
//
//   // var
//   // stability: number // % (0 - civil war, 100 - perfect)
//   // relation: number // % (-100 - enemy, 100 - BFF)
//
//   constructor(name: string, origin: Origin, ideology: Ideology, regime: Regime, id?: string, modifiers?: RelationshipModifierEvent[]) {
//     if (id)
//       this.id = id;
//     else
//       this.id = v4();
//     this.name = name;
//     this.origin = origin;
//     this.ideology = ideology;
//     this.regime = regime;
//     if (modifiers)
//       this.modifiers = modifiers;
//   }
//
//
//   addModifier(modifier: RelationshipModifierEvent): void {
//     this.modifiers.push(modifier)
//     console.debug('Added modifier %s to country %s (id=%s)', modifier.id, this.name, this.id)
//   }
//
//   relationship(): number {
//     return clamp(this.modifiers.reduce((acc: number, modifier: RelationshipModifierEvent) => {
//       return acc + modifier.value
//     }, 0), -100, 100)
//   }
//
//   toString() {
//     return `
//     ***************
//
//     NAME - ${this.name}
//     ORIGIN - ${this.origin}
//     IDEOLOGY - ${this.ideology}
//     REGIME - ${this.regime}
//     RELATIONSHIP - ${this.relationship()}
//
//     ***************
//     `
//   }
// }

// export class RandomizedCountry extends Country {
//   constructor() {
//     super('France', sample(Object.values(Origin)) as Origin, sample(Object.values(Ideology)) as Ideology, sample(Object.values(Regime)) as Regime, Math.round(Math.random() * 100) / 100);
//     this.id = v4();
//   }
// }
