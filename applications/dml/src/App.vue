<template>
  <div class="home-view-wrap">
    <comm-gnb
      channel="dml"
      @onClickGnbService="onClickGnbService"
      @onClickLogin="onClickLogin"
      @onClickLoginCommSearch="onClickLoginCommSearch"
    />
    <router-view />
    <comm-footer id="footer" @onFooterItemClick="onFooterItemClick" />
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description DML App(host)
 */
import { defineComponent, defineAsyncComponent } from "vue";
import { useAppStore } from "@/store/pinia/app/AppStore";
import { useProductStore } from "@/store/pinia/product/productStore";
const CommGnb = defineAsyncComponent(() => import("common/CommGnb.vue"));
const CommFooter = defineAsyncComponent(() => import("common/CommFooter.vue"));
export default defineComponent({
  components: { CommGnb, CommFooter },
  name: "App",
  setup() {
    const appStore = useAppStore();
    const productStore = useProductStore();
    /** GNB서비스 클릭 시 */
    const onClickGnbService = (menu: { title: string; target: string; channel: string; active: boolean }) => {
      console.log("serviceMenu", menu);
    };
    /** 로그인 클릭 시 */
    const onClickLogin = () => {
      appStore.login({ userName: "홍길동", token: "ase@232" });
      console.log("onClickLogin");
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
      onClickLoginCommSearch,
      onFooterItemClick,
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.home-view {
  &-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
