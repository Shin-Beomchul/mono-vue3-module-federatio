<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CommPage msg="Welcome to Your Vue.js + TypeScript App" />
    <CommGnb />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommPage from "@/exposes/CommPage.vue";
import CommGnb from "@/exposes/layout/CommGnb.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    CommPage,
    CommGnb,
  },
});
</script>
