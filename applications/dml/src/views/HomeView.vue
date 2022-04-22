<template>
  <div class="dml-home-wrap">
    <h1>Mall</h1>
    <p class="text">test pages111</p>
    <p class="test1">test class /red</p>
    <p class="test2">test class /green</p>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description Dml Home
 */
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  name: "HomeView",
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
.dml-home-wrap {
  @include flex(column, center, center);
  min-width: 1904px;
  height: 100%;
  background: #ffecf0;
}
.text {
  color: $primaryDml;
  font-size: 20px;
}
</style>
