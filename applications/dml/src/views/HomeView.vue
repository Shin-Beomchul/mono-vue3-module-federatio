<template>
  <div v-if="isLoadingComponent">Loading CommPage.vue</div>
  <CommPage
    msg="Welcome to Webpack5 Module-Federaion (Vue3 + TypeScript + MonoRepository(yarn-berry)"
    :style="{ height: '750px' }"
  />
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";

const isLoadingComponent = ref(true);
const CommPage = defineAsyncComponent(() =>
  import("common/CommPage.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);
</script>
