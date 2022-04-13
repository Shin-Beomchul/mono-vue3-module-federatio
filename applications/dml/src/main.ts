import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/vuex";
import { createPinia } from "pinia";
import { setupI18n } from "./i18n/i18n";
import koMessages from "@/i18n/locales/ko.json";
import enMessages from "@/i18n/locales/en.json";
import PiniaLogger from "pinia-logger";
loadFonts();
/** i18n */
const i18n = setupI18n({
  globalInjection: true,
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_LOCALE,
  messages: {
    en: { ...enMessages }, // Default language only, other languages is lazy loading.
  },
});
export { i18n };

/** pinia */
const pinia = createPinia();
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: process.env.VUE_APP_MODE === "production",
  })
);
createApp(App).use(store).use(vuetify).use(i18n).use(pinia).use(router).mount("#app");
