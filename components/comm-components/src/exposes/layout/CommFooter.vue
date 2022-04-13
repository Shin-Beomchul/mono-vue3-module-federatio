<template>
  <div id="comm-footer">
    <div align="left">
      <button @click="onFooterItemClick($event, '회사소개')">About Us</button>
      <button @click="onFooterItemClick($event, '이용약관')">Terms of service</button>
      <button @click="onFooterItemClick($event, '개인정보처리방침')">privacy policy</button>
      <button @click="onFooterItemClick($event, '입점문의')">Store inquiry</button>
      <button @click="onFooterItemClick($event, '고객센터')">Service center</button>
    </div>
    <div>
      Main Phone: 1588-7522 (Customer Center Hours: 09:00~18:00) Social Customer Center (In charge of electronic
      financial division of labor) TEL: 1544-5555 (Reception hours: 09:00~18:00) FAX: 02-2025-5555 E-mail:
      osstem@gmail.com
    </div>
    <div>
      Person in charge of personal information management: Shin Sang-cheol, Managing Director E-mail: osstem@naver.com
      Mail-order business report: Seoul Gangseo No. 2211 Advertising Media Deliberation No. : 2332-110-06-0213 Medical
      device sales business report number: No. 123 Pharmaceutical wholesaler license number: No. 2020-1742043-02058
      Health functional food general sales business: No. 2119-0584758
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description commFooter
 * @emits
 *  onFooterItemClick(itemKey: string)
 */
import { defineComponent } from "vue";
export default defineComponent({
  name: "CommFooter",
  setup(props, context) {
    const onFooterItemClick = ($event: Event, itemKey: string) => {
      context.emit("onFooterItemClick", itemKey);
    };
    return {
      onFooterItemClick,
    };
  },
});
</script>

<style scoped lang="scss"></style>
