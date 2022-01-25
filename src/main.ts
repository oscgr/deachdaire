import { createApp } from 'vue'
import App from './App.vue'
import {createI18n} from "vue-i18n";


const messages = {
  en: {
    test: {
      test: 'toto'
    }
  },
  fr: {
    test: {
      test: 'toto'
    }
  }
}
const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
