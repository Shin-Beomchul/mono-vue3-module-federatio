import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/vuex";
import { createPinia } from "pinia";
const pinia = createPinia();
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "@/assets/styles/global.scss";

loadFonts();
createApp(App).use(store).use(vuetify).use(pinia).use(router).mount("#app");
