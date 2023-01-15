import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from '@/App.vue'
import router from '@/router'
import messages from "@intlify/unplugin-vue-i18n/messages";
import { createPinia } from 'pinia';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "de",
    fallbackLocale: "en",
    availableLocales: ["en", "de"],
    messages: messages,
  })

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .use(i18n)
    .mount('#app')
