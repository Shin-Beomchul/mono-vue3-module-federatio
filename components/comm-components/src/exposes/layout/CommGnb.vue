<template>
  <div>
    <div align="right" id="comm-gnb">
      <button @click="onClickGnbService($event, 'tv')">TV</button>
      <button @click="onClickGnbService($event, 'mall')">Shopping Mall</button>
      <button @click="onClickGnbService($event, 'edu')">Education</button>
      <button @click="onClickGnbService($event, 'job')">Job</button>
      <button @click="onClickGnbService($event, 'software')">Software</button>
      <button @click="onClickGnbService($event, 'interior')">Interior</button>
      <button @click="onClickGnbService($event, 'eduonline')">OnlineEdu</button>

      <button @click="onClickLoginCommSearch">Search</button>
      <button @click="onClickLogin">Login</button>
      <select v-model="lang" @change="onChangeLang">
        <option value="ko">한국어</option>
        <option value="en">English</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description commGnb
 * @emits
 *  onClickGnbService(serviceId: string)
 *  onClickLogin(event: Event)
 *  onClickLoginCommSearch(event: Event)
 *  onClickHome(event: Event)
 *  onChangeLang(lang: string)
 */
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "CommGnb",

  setup(props, context) {
    const onClickGnbService = (event: Event, serviceId: string) => {
      context.emit("onClickGnbService", serviceId);
    };
    const onClickLogin = (event: Event) => {
      context.emit("onClickLogin", event);
    };

    const onClickLoginCommSearch = (event: Event) => {
      context.emit("onClickLoginCommSearch", event);
    };
    const lang = ref("en");
    const onChangeLang = () => {
      context.emit("onChangeLang", lang.value);
    };
    return {
      lang,
      onClickGnbService,
      onClickLogin,
      onClickLoginCommSearch,
      onChangeLang,
    };
  },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/_layout.scss";
</style>
