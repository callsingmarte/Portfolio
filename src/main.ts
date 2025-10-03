import './assets/baseStyles/base.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import es from '@/lang/es.json'
import en from '@/lang/en.json'
import fr from '@/lang/fr.json'

const lang = localStorage.getItem('lang')
const languages = ['es', 'en', 'fr']
const i18n = createI18n({
  availableLocales: languages,
  locale: lang || 'es',
  fallbackLocale: 'en',
  messages: {
    es,
    en,
    fr,
  },
})
const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
