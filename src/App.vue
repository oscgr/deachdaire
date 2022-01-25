<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import {defineComponent, onMounted} from "vue";
import useCountries from "./stores/useCountries";
import useClock from "./stores/useClock";
import AppHeader from "./AppHeader.vue";
import GameTimeline from "./GameTimeline.vue";

export default defineComponent({
  components: {
    GameTimeline,
    AppHeader,
    HelloWorld,
  },
  setup() {
    const {init: initCountries, save: saveCountries} = useCountries()
    const {init: initClock, save: saveClock, display} = useClock()
    onMounted(() => {
      initCountries()
      initClock()
      saveCountries()
      saveClock()
    })

    return {
      display,
    }
  }
})
</script>


<template>
  <AppHeader />
  <GameTimeline />
  <pre class="language-ascii-art">
 _____                  _     _ _               __
  |  __ \                | |   | (_)             / _|
 | |__) |___ _ __  _   _| |__ | |_  ___    ___ | |_
  |  _  // _ \ '_ \| | | | '_ \| | |/ __|  / _ \|  _|
| | \ \  __/ |_) | |_| | |_) | | | (__  | (_) | |
|_|  \_\___| .__/ \__,_|_.__/|_|_|\___|  \___/|_|

  </pre>
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
  font-family: "Lucida Console", Monaco, monospace !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
