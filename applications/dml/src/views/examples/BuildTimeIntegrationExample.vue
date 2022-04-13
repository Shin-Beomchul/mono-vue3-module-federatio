<template>
  <h1>BuildTimeIntegrationExample See created() Function</h1>
</template>
<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description BuildTimeIntegrationExample
 */

import { defineComponent } from "vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { PersistentLruCache, PresitentType } from "@god/lru-cache";
import { useI18n } from "vue-i18n";
export default defineComponent({
  components: {},
  name: "BuildTimeIntegrationExample",
  props: {
    msg: String,
  },
  data() {
    return {
      isExampleLog: false,
    };
  },
  created() {
    console.log("useI18n welcome Message", useI18n().t("welcome"));

    /* @god/lru-cache*/
    let persistentLruCache = new PersistentLruCache(PresitentType.Local, {
      max: 30,
    });
    persistentLruCache.setStorage("key", "hello");
    console.log("persistentLruCache [exist Key]", persistentLruCache.isHit("key")); // hit : true
    console.log("persistentLruCache [Not exist Key]", persistentLruCache.isHit("ghost")); // miss : false

    /* @god/type-utils*/
    sayHello(); // function
    let heloTypeClass = new HelloTypeClass(); // Class
    console.log(heloTypeClass.getName());

    // @god/mock-service
    let mockService = new MockService();
    mockService.getMockAxiosResponse(MockAPIMode.FAST).then((r) => console.log("use MockService", r));
  },
});
</script>

<style lang="scss"></style>
