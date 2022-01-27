import { DateTime } from 'luxon'
import { reactive, toRefs } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { v4 } from 'uuid'
import { clamp, random, sample } from 'lodash'
import generator from '../generators/countries/generator'
import { Regime } from '../types/Country'
import type { Country } from '../types/Country'
import type { RelationshipModifierEvent } from '../types/Event'

interface State {
  countries: Country[]
}

const state = reactive<State>({
  countries: [],
})

const saveGame = useLocalStorage<Country[]>('countries', [])

export default () => {
  const regimeModifier = (regime: Regime): number => {
    switch (regime) {
      case Regime.TOTALITARIAN:
        return 30
      case Regime.AUTHORITARIAN:
        return 10
      case Regime.FLAWED_DEMOCRACY:
        return -10
      case Regime.FULL_DEMOCRACY:
        return -30
    }
  }

  const add = (country: Partial<Country>) => {
    const regime = country.regime || sample(Object.values(Regime)) as Regime
    state.countries.push({
      id: country.id || v4(),
      name: country.name || '',
      regime,
      stability: country.stability || Math.round(Math.pow(random(0, 10000), 0.5)),
      modifiers: country.modifiers || [{
        id: v4(),
        description: 'Régime',
        value: regimeModifier(regime),
        timestamp: DateTime.now().toISO(),
      }],
    })
  }

  // called once
  const init = () => {
    if (saveGame.value.length > 0)
      state.countries = saveGame.value
    else
      generator().forEach((country: Partial<Country>) => add(country))
  }

  const getById = (id?: string): Country | undefined => {
    if (!id)
      return
    return state.countries.find((country: Country) => country.id === id)
  }

  const getRelationship = (id?: string): number | undefined => {
    const country = getById(id)
    if (country) {
      return clamp(country.modifiers.reduce((acc: number, modifier: RelationshipModifierEvent) => {
        return acc + modifier.value
      }, 0), -100, 100)
    }
  }

  const addModifierToCountryId = (id: string, modifier: RelationshipModifierEvent) => {
    const country = getById(id)
    if (country)
      country.modifiers.push(modifier)
  }

  const save = () => {
    saveGame.value = state.countries
  }

  return {
    init,
    getById,
    addModifierToCountryId,
    save,
    add,
    getRelationship,
    ...toRefs(state),
  }
}
