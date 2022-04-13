<template>
  <div>
    <div align="right" id="comm-gnb">
      <v-btn @click="onClickGnbService($event, 'tv')">TV</v-btn>
      <v-btn @click="onClickGnbService($event, 'mall')">Mall</v-btn>
      <v-btn @click="onClickGnbService($event, 'edu')">Education</v-btn>
      <v-btn @click="onClickGnbService($event, 'job')">Job</v-btn>
      <v-btn @click="onClickGnbService($event, 'software')">Software</v-btn>
      <v-btn @click="onClickGnbService($event, 'interior')">Interior</v-btn>
      <v-btn @click="onClickGnbService($event, 'eduonline')">OnlineEdu</v-btn>

      <v-btn @click="onClickLoginCommSearch">Search</v-btn>
      <v-btn @click="onClickLogin">Login</v-btn>
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
