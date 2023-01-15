import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from '@/App.vue'
import router from '@/router'
import store from "@/store";

import messages from "@intlify/unplugin-vue-i18n/messages";

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "de",
    fallbackLocale: "en",
    availableLocales: ["en", "de"],
    messages: messages,
  })

createApp(App)
    .use(store)
    .use(router)
    .use(i18n)
    .mount('#app')
