import { sample } from 'lodash'
import type { Country } from '../../types/Country'
import bonuses from './data/bonuses'
import cores from './data/cores'
import prefixes from './data/prefixes'
import suffixes from './data/suffixes'
export default (): Partial<Country>[] => {
  const LENGTH = 20
  return Array.from(Array(LENGTH)).map(() => {
    const prefix = sample(prefixes) || ''
    const core = sample(cores) || ''
    const suffix = sample(suffixes) || ''
    const bonus = sample(bonuses) || ((v: string) => v)
    const word = Math.random() > 0.6 ? (prefix + suffix) : (prefix + core + suffix)
    if (Math.random() > 0.95) {
      return {
        name: bonus(word),
      }
    }

    return {
      name: word,
    }
  })
}
