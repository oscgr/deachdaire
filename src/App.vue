<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import useCountries from './stores/useCountries'
import useClock from './stores/useClock'
import AppHeader from './AppHeader.vue'
import GameTimeline from './GameTimeline.vue'
import GameCountries from './GameCountries.vue'

export default defineComponent({
  components: {
    GameCountries,
    GameTimeline,
    AppHeader,
  },
  setup() {
    const { init: initCountries, save: saveCountries } = useCountries()
    const { init: initClock, save: saveClock, display } = useClock()
    onMounted(() => {
      initCountries()
      initClock()
      saveCountries()
      saveClock()
    })

    return {
      display,
    }
  },
})
</script>

<template>
  <AppHeader />
  <GameTimeline />
  <GameCountries />
</template>

<style lang="scss">
body {
  margin: 8px;
  border: thin solid #2c3e50;
  background: antiquewhite;

}
button, input[type="submit"], input[type="reset"] {
  background: none;
  color: inherit;
  border: thin solid #2c3e50;
  padding: 2px 6px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    color: antiquewhite;
    background: #2c3e50;
  }
}

#app {
  display: flex;
  align-content: center;
  flex-direction: column;
  font-family: 'Courier New', monospace;
  text-align: center;
  color: #2c3e50;
}

.language-ascii-art {
  user-select: none;
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  letter-spacing: -0.07em;
  line-height: 0.8em;
  text-shadow: 0 0 5px rgba(100, 100, 100, 0.5);
}

.language-ascii-no-shadows {
  display: inline-block;
  font-family: "Lucida Console", Monaco, monospace;
  letter-spacing: -0.2em;
  line-height: 0.8em;
}

</style>
