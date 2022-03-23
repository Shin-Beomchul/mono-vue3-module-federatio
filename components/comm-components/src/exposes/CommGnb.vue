<template>
  <div>
    <div align="right" id="comm-gnb">
      <button @click="onClickLoginCommSearch">통합검색</button>
      <button @click="onClickLogin">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommGnb",

  setup(props, context) {
    const onClickLogin = (event: Event) => {
      context.emit("onClickLogin", event);
    };

    const onClickLoginCommSearch = (event: Event) => {
      context.emit("onClickLoginCommSearch", event);
    };
    return {
      onClickLogin,
      onClickLoginCommSearch,
    };
  },
});
</script>

<style scoped lang="scss">
#comm-gnb {
  background: #5c42b9;
}
</style>
