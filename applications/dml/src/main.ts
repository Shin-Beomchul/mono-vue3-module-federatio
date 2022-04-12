import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createPinia } from "pinia";
import { setupI18nWithRemotes } from "@/i18n/i18n";
const pinia = createPinia();

const app = createApp(App);

let i18n = {};
setupI18nWithRemotes({
  globalInjection: true,
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_LOCALE,
})
  .then((initI18n) => {
    i18n = initI18n;
    app
      .use(initI18n)
      .use(pinia)
      .use(store) //@deprecated
      .use(router)
      .mount("#app");
  })
  .catch((error) => {
    console.error("init Fail ", error);
    app
      .use(pinia)
      .use(store) //@deprecated
      .use(router)
      .mount("#app");
  });

// todo
// (async () => {
//   const url = await getAPIAddress(params); //API promises
//   // the rest of the code
// })();
export { i18n };
