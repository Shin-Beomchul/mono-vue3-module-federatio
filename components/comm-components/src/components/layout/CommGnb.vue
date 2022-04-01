<template>
  <div>
    <div align="right" id="comm-gnb">
      <button @click="onClickHome">Home</button>
      <button @click="onClickLoginCommSearch">통합검색</button>
      <button @click="onClickLogin">Login</button>
      <select v-model="lang" @change="onChangeLang($event)">
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description comm Gnb
 * @emits
 *  onClickLogin(event: Event)
 *  onClickLoginCommSearch(event: Event)
 *  onClickHome(event: Event)
 *  onChangeLang(lang: string)
 */
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommGnb",

  setup(props, context) {
    const onClickLogin = (event: Event) => {
      context.emit("onClickLogin", event);
    };

    const onClickHome = (event: Event) => {
      context.emit("onClickHome", event);
    };
    const onClickLoginCommSearch = (event: Event) => {
      context.emit("onClickLoginCommSearch", event);
    };
    const onChangeLang = (event: any) => {
      context.emit("onChangeLang", event.target.value);
    };
    return {
      onClickLogin,
      onClickLoginCommSearch,
      onChangeLang,
      onClickHome,
    };
  },
  data() {
    return {
      lang: "ko",
    };
  },
});
</script>

<style scoped lang="scss">
@import "../../assets/styles/_layout.scss";
</style>
