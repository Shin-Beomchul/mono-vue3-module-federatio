import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/vuex";
import { createPinia } from "pinia";
const pinia = createPinia();
createApp(App).use(store).use(pinia).use(router).mount("#app");
