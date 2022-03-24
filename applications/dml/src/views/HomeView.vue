<template>
  <div class="home">
    <CommGnb></CommGnb>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <CommFooter></CommFooter>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { MockService, MockAPIMode } from "@god/mock-service";
import { sayHello } from "@god/type-utils";
import { HelloTypeClass } from "@god/type-utils";
import { PersistentLruCache, PresitentType } from "@god/lru-cache";
const CommGnb = defineAsyncComponent(() => import("components/CommGnb"));
export default defineComponent({
  name: "HomeView",
  components: {
    CommFooter: defineAsyncComponent(() => import("components/CommFooter")),
    CommGnb,
    HelloWorld,
  },
  created() {
    console.log("running mode ", process.env.VUE_APP_ENV);
    /* @god/lru-cache*/
    let persistentLruCache = new PersistentLruCache(PresitentType.Local, {
      max: 30,
    });
    persistentLruCache.setStorage("key", "hello");
    console.log(
      "persistentLruCache [exist Key]",
      persistentLruCache.isHit("key")
    );
    console.log(
      "persistentLruCache [Not exist Key]",
      persistentLruCache.isHit("ghost")
    );

    /* @god/type-utils*/
    sayHello(); // function
    let heloTypeClass = new HelloTypeClass(); // Class
    console.log(heloTypeClass.getName());

    // @god/mock-service
    let mockService = new MockService();
    mockService
      .getMockAxiosResponse(MockAPIMode.FAST)
      .then((r) => console.log("use MockService", r));
  },
});
</script>
