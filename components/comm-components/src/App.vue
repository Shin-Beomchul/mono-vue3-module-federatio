<template>
  <div class="home-view-wrap">
    <CommGnb />
    <!-- <CommPage msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <comm-page>
      <template v-slot:main><router-view /></template>
    </comm-page>
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
