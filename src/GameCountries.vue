<template>
  <div class="game-countries">
    <GameCountry v-for="country in countries" :key="country.id" :country="country" />
  </div>
</template>
<script lang="ts">
import { sortBy } from 'lodash'
import { computed, reactive } from 'vue'
import useCountries from './stores/useCountries'
import GameCountry from './GameCountry.vue'
import type { Country } from './types/Country'

interface State {
  sortBy: keyof Country
  desc: boolean
}
export default {
  name: 'GameCountries',
  components: { GameCountry },
  setup() {
    const state = reactive<State>({
      sortBy: 'name',
      desc: false,
    })
    const { countries: countriesRaw } = useCountries()

    const countries = computed<Country[]>(() => sortBy(countriesRaw.value, state.sortBy))
    return {
      countries,
    }
  },
}
</script>
<style lang="scss" scoped>
.game-countries {
  border-right: thin solid #2c3e50;
  border-bottom: thin solid #2c3e50;
  display: flex;
  max-width: 200px;
  gap: 4px;
  flex-direction: column;
  .game-timeline-row {
    display: flex;
    .game-timeline-label {
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 80px;
      text-align: left;
      padding: 0 8px;
      line-height: 1.2rem;
      max-height: 100%;
    }
    button {
      margin: 4px;
      width: 100%;
    }
  }
}
</style>
