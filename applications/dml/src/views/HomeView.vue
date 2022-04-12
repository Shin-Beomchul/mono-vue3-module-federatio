<template>
  <div :style="{ height: '750px' }">
    <h1>{{ $t("welcome") }}</h1>
    <div v-if="isLoadingComponent">loading... CommButton.vue</div>
    <CommButton />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from "vue";
const isLoadingComponent = ref(true);
const CommButton = defineAsyncComponent(() =>
  import("common/CommButton.vue").finally(() => {
    isLoadingComponent.value = false;
  })
);
</script>
