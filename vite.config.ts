import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueI18n({ defaultSFCLang: 'yaml' })],
})
