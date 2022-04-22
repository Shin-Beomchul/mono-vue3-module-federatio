<template>
  <div class="comm-page-wrap">
    <slot name="main"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComPage",
});
</script>
<style lang="scss" scoped>
.comm-page-wrap {
  @include flex(column, center, flex-start);
  flex: 1;
}
</style>
