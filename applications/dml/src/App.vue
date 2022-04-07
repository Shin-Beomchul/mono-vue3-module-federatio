<template>
  <comm-gnb />
  <router-view></router-view>
  <comm-footer />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
const CommGnb = defineAsyncComponent(() => import("common/CommGnb.vue"));
const CommFooter = defineAsyncComponent(() => import("common/CommFooter.vue"));

export default defineComponent({
  components: { CommGnb, CommFooter },
  name: "App",
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
