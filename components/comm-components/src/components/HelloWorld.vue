<template>
  <p>Hello</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>
