<template>
  <div class="mem-home-view">
    <h1>Denall Comm</h1>
    <p>test pages</p>
    <p class="test1">test class/ blue</p>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description pinia Store Example
 */
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  name: "TestPage",
  props: {
    msg: String,
  },
});
</script>
<style lang="scss" scoped>
.mem-home-view {
  @include flex(column, center, center);
  min-width: 1904px;
  height: 100%;
  background: #e0f4fd;
}
</style>
