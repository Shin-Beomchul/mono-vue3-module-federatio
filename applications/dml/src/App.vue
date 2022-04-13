<template>
  <comm-gnb
    @onClickGnbService="onClickGnbService"
    @onClickLogin="onClickLogin"
    @onClickLoginCommSearch="onClickLoginCommSearch"
    @onChangeLang="onChangeLang"
  />
  <router-view></router-view>
  <!-- Footer -->
  <comm-footer id="footer" @onFooterItemClick="onFooterItemClick" />
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description DML App(host)
 */
import { defineComponent, defineAsyncComponent } from "vue";

import { loadLocaleMessages, setI18nLanguage } from "@/i18n/i18n";
import { i18n } from "@/main";
import { useAppStore } from "./store/pinia/app/AppStore";
import { useProductStore } from "./store/pinia/product/productStore";
const CommGnb = defineAsyncComponent(() => import("common/CommGnb.vue"));
const CommFooter = defineAsyncComponent(() => import("common/CommFooter.vue"));
export default defineComponent({
  components: { CommGnb, CommFooter },
  name: "App",
  setup() {
    const appStore = useAppStore();
    const productStore = useProductStore();
    /** GNB서비스 클릭 시 */
    const onClickGnbService = (serviceId: string) => {
      console.log("serviceId", serviceId);
    };
    /** 로그인 클릭 시 */
    const onClickLogin = () => {
      appStore.login({ userName: "홍길동", token: "ase@232" });
      console.log("onClickLogin");
    };
    /** 언어변경 */
    const onChangeLang = async (lang: string) => {
      await loadLocaleMessages(i18n, lang);
      setI18nLanguage(i18n, lang);
    };
    /**통합검색 클릭 시 */
    const onClickLoginCommSearch = () => {
      console.log("onClickLoginCommSearch");
    };
    /**풋터 클릭 시 */
    const onFooterItemClick = (itemKey: string) => {
      console.log("onFooterItemClick", itemKey);
    };
    return {
      appStore,
      productStore,
      onClickGnbService,
      onClickLogin,
      onChangeLang,
      onClickLoginCommSearch,
      onFooterItemClick,
    };
  },
  methods: {},
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
