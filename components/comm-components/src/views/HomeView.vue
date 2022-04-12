<template>
  <div class="home">
    <CommGnb />
    <CommPage msg="Welcome to Your Vue.js + TypeScript App" />
    <CommFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CommPage from "@/exposes/CommPage.vue";
import CommGnb from "@/exposes/layout/CommGnb.vue";
import CommFooter from "@/exposes/layout/CommFooter.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    CommPage,
    CommGnb,
    CommFooter,
  },
});
</script>
