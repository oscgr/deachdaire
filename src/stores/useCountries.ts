import {Country, Regime} from "../types/Country";
import {reactive, toRefs} from "vue";
import {RelationshipModifierEvent} from "../types/Event";
import {useLocalStorage} from "@vueuse/core";
import genReal from "../generators/countries/genReal";
import {v4} from "uuid";
import {clamp, sample} from "lodash";

interface State {
  countries: Country[]
}

const state = reactive<State>({
  countries: []
})

const saveGame = useLocalStorage<Country[]>('countries', [])

export default () => {

  // called once
  const init = () => {
    if (saveGame.value.length > 0)
      state.countries = saveGame.value
    else // TODO init from gen()
      genReal().forEach((country: Partial<Country>) => add(country))
    console.log(state.countries[0])
  }

  const add = (country: Partial<Country>) => {
    state.countries.push({
      id: country.id || v4(),
      name: country.name || 'France', // TODO random
      modifiers: country.modifiers || [],
      regime: country.regime || sample(Object.values(Regime)) as Regime,
      stability: country.stability || 100,
    })
  }

  const getById = (id: string): Country | undefined => {
    return state.countries.find((country: Country) => country.id === id)
  }

  const getRelationship = (id: string): number | undefined => {
    const country = getById(id)
    if (country)
      return clamp(country.modifiers.reduce((acc: number, modifier: RelationshipModifierEvent) => {
        return acc + modifier.value
      }, 0), -100, 100)
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
    ...toRefs(state)
  }
}
