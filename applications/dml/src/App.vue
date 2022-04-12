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
import { defineComponent, defineAsyncComponent } from "vue";
import { loadLocaleMessages, loadLocaleMessagesWithRemotes, setI18nLanguage } from "@/i18n/i18n";
import { i18n } from "@/main";
const CommGnb = defineAsyncComponent(() => import("common/CommGnb.vue"));
const CommFooter = defineAsyncComponent(() => import("common/CommFooter.vue"));
export default defineComponent({
  components: { CommGnb, CommFooter },
  name: "App",
  methods: {
    /** GNB서비스 클릭 시 */
    onClickGnbService(serviceId: string) {
      console.log("serviceId", serviceId);
    },
    /** 로그인 클릭 시 */
    onClickLogin() {
      console.log("onClickLogin");
    },
    /** 언어변경 */
    async onChangeLang(lang: string) {
      await loadLocaleMessagesWithRemotes(i18n, lang);
      setI18nLanguage(i18n, lang);
      console.log("언어변경", lang);
    },
    /**통합검색 클릭 시 */
    async onClickLoginCommSearch() {
      console.log("onClickLoginCommSearch");
    },
    /**풋터 클릭 시 */
    onFooterItemClick(itemKey: string) {
      console.log("onFooterItemClick", itemKey);
    },
  },
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
