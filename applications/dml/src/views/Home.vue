<template>
  <div class="hello">
    <div id="content">
      <h1>{{ $t("welcome") }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description Home
 */
import { defineComponent } from "vue";
export default defineComponent({
  components: {},
  name: "dml-home",
  props: {
    msg: String,
  },
  data() {
    return {
      homeMessage: "Home SweetHome",
    };
  },
  created() {
    console.log("create Home");
  },
  methods: {},
});
</script>

<style scoped lang="scss"></style>
