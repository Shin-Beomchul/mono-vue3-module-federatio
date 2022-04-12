<template>
  <div>
    <div id="content"></div>
    <h3>normal</h3>
    <button @click="apiFunction($event, 'apiKey')">apiFunction</button>

    <h3>useConsecutiveGuard</h3>
    <button @click="consecutiveGuardAPI($event, 'apiKey')">consecutiveGuardAPI</button>
    <h3>useDebounceFn</h3>

    <button @click="debouncedAPI($event, 'apiKey')">debouncedAPI</button>
    <p>Event handler : {{ updated }}</p>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description Composable Example
 */
import { defineComponent, ref } from "vue";
import { useDebounceFn, useConsecutiveGuard } from "@/composable";
import { MockService } from "@god/mock-service/lib";
export default defineComponent({
  components: {},
  name: "ComposableView",
  props: {
    msg: String,
  },
  setup() {
    const updated = ref("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const apiFunction = (event, param) => {
      new MockService().fakeHttpLatencyMock().then((apiResponse) => {
        console.log("callAPI");
        const now = new Date();
        updated.value = apiResponse.data + " " + now.getSeconds() + "s " + now.getMilliseconds() + "ms";
      });
    };
    // useConsecutiveGuard
    const consecutiveGuardAPI = useConsecutiveGuard(1000, apiFunction, (state: string) => {
      console.log(state);
    });
    // useDebounceFn
    const debouncedAPI = useDebounceFn({ delay: 1000, immediate: true }, apiFunction);
    return {
      apiFunction,
      updated,
      debouncedAPI,
      consecutiveGuardAPI,
    };
  },

  data() {
    return {
      homeMessage: "Composable",
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss"></style>
