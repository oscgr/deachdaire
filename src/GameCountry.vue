<template>
  <div class="game-country">
    <div class="game-country-row">
      <!--      <span v-text="t('name')" />-->
      <span v-text="country.name" />
      <span v-text="relationship" />
    </div>

    <!--    <div class="game-country-row">-->
    <!--      <span v-text="country.regime" />-->
    <!--    </div>-->
    <!--    <div class="game-country-row">-->
    <!--      <span v-text="country.stability + '%'" />-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import useCountries from './stores/useCountries'
import type { Country } from './types/Country'

export default defineComponent({
  name: 'GameCountry',
  props: {
    country: {
      type: Object as PropType<Country>,
    },
  },
  setup(props) {
    const { t } = useI18n()
    const { getRelationship } = useCountries()

    const relationship = computed(() => getRelationship(props.country?.id))
    return { t, relationship }
  },
})
</script>

<style lang="scss" scoped>
.game-country {
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .game-country-row {
    display: flex;
    padding: 4px;
    justify-content: space-between;
  }
  &:hover {
    background: #2c3e50;
    color: antiquewhite;
  }
}
</style>
<i18n lang="yaml">
en:
  name: Name
fr:
  name: Nom
</i18n>
