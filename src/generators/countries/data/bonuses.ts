import { deburr } from 'lodash'

const vowels = /[aeiou]/gi

export default [
  (v: string) => `${v} du Nord`,
  (v: string) => `${v} du Sud`,
  (v: string) => `${v} Emirates`,
  (v: string) => deburr(v)[0]?.match(vowels) ? `Île d'${v}` : `Île de ${v}`,
  (v: string) => deburr(v)[0]?.match(vowels) ? `Côte d'${v}` : `Côte de ${v}`,
] as ((v: string) => string)[]
