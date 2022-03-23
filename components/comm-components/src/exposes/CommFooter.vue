<template>
  <div id="comm-footer">
    <div align="left">
      <button @click="onFooterItemClick($event, '회사소개')">회사소개</button>
      <button @click="onFooterItemClick($event, '이용약관')">이용약관</button>
      <button @click="onFooterItemClick($event, '개인정보처리방침')">
        개인정보처리방침
      </button>
      <button @click="onFooterItemClick($event, '입점문의')">입점문의</button>
      <button @click="onFooterItemClick($event, '고객센터')">고객센터</button>
    </div>
    <div>
      대표 고객센터 TEL : 1588-7522 (상담가능시간 : 평일 09:00~18:00) 쇼핑몰
      고객센터(전자금융거래분쟁처리담당) TEL : 1544-5555 (상담가능시간 : 평일
      09:00~18:00) FAX : 02-2025-5555 E-mail : sbc0830g@gmail.com
    </div>
    <div>
      개인정보관리 책임자 : 신상철 상무이사 E-mail: sbc0830d@naver.com
      통신판매업신고 : 서울강서 2211호 광고매체 심의번호 : 2332-110-06-0213
      의료기기 판매업 신고번호 : 제123호 의약품 도매상 허가번호 :
      제2020-1742043-02058호 건강기능식품일반판매업 : 제2119-0584758호
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CommFooter",

  setup(props, context) {
    const onFooterItemClick = ($event: Event, itemKey: string) => {
      context.emit("onFooterItemClick", event, itemKey);
    };
    return {
      onFooterItemClick,
    };
  },
});
</script>

<style scoped lang="scss"></style>
