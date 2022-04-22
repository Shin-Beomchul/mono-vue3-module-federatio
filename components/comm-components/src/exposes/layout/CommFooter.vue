<template>
  <footer class="comm-footer-wrap">
    <div class="comm-footer-outer">
      <div class="comm-footer-inner">
        <div class="comm-footer-menus">
          <template v-for="(menu, index) in page.menus" :key="index">
            <button class="btn-text">
              {{ menu }}
            </button>
          </template>
        </div>
        <!-- <div>
          <v-icon>$vuetify.icons.facebook</v-icon>
          <v-icon>$vuetify.icons.kakao</v-icon>
        </div> -->
      </div>
    </div>
    <div class="comm-footer-inner">
      <div class="comm-footer-info">
        <span class="text-strong">대표 고객센터</span>
        <span>TEL : 1588-7522 (상담가능시간 : 평일 09:00~18:00)</span>
        <span class="text-strong">쇼핑몰 고객센터(전자금융거래분쟁처리담당)</span>
        <span>TEL : 1544-2275 (상담가능시간 : 평일 09:00~18:00)</span>
        <span>FAX : 02-2025-8199 E-mail : malll@god.com</span>
        <span><v-btn variant="outlined" size="x-small">전자장부 바로가기</v-btn></span>
        <span>God 주식회사 대표이사 : 신범철</span>
        <span>사업자등록번호 : 132-81-47503</span>
        <span>개인정보관리 책임자 : 신현복 전무이사 E-mail: grant.lee@gmail.com</span>
        <span>통신판매업신고 : 서울강북 2151호11</span>
        <span>광고매체 심의번호 : 4011-510-09-210723</span>
        <span>소프트웨어 판매업 신고번호 : 제18311호 의약품 도매상 허가번호 : 제2010-3740033-00202호</span>
        <span>일반소프트웨어 판매업 : 제2019-130014650호</span>
        <span>직업정보제공사업 신고번호 : 서울 양천 제2012-22호</span>
        <span>서울시 양천로 344 God주식회사(주)</span>
        <span>대표전화 : 02-2016-7000 FAX : 0211-2016-7001</span>
      </div>
    </div>
    <div class="comm-footer-inner">
      <small class="copyright">COPYRIGHT © God Develop IMPLANT CO., LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CommFooter",
  components: {},

  data() {
    return {
      page: {
        menus: ["회사소개", "이용약관", "개인정보처리방침", "입점문의", "고객센터", "뉴스제보"],
        familysite: ["God company", "God recruitment", "God Order", "God soft", "God it", "git Care"],
        notices: [
          { text: "9/30(수)~10/4(일) 서버점검공지", date: "2021-08-04" },
          { text: "추석연휴 배송 및 시스템 점검 안내", date: "2021-08-05" },
          { text: "덴올 적립금 이관 정책 공지", date: "2021-08-06" },
          { text: "8/27(목) 서버점검공지", date: "2021-08-07" },
        ],
        events: [
          { text: "7월 이벤트 당첨자 공지", date: "2021-08-04" },
          { text: "6월 초성퀴즈 이벤트 당첨자 공지", date: "2021-08-05" },
          { text: "5월 가정의달 이벤트 당첨자 공지", date: "2021-08-06" },
          { text: "4월 덴올 능력고사 이벤트 당첨자 공지", date: "2021-08-07" },
        ],
        mallServices: [
          { text: "덴올배송안내", icon: "$vuetify.icons.delivery" },
          { text: "개원신청상담", icon: "$vuetify.icons.openDental" },
          { text: "상품입점문의", icon: "$vuetify.icons.setUpStore" },
          { text: "협력업체문의", icon: "$vuetify.icons.cooperation" },
          { text: "카드무이자안내", icon: "$vuetify.icons.interestFree" },
          { text: "B2B전용쇼핑몰", icon: "$vuetify.icons.btob" },
        ],
      },
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
:root {
  --height: 3.333rem; //40px
}
::deep {
  .v-btn--size-default {
    height: 3.25rem; //39px
    border-radius: 0;
    letter-spacing: -0.042rem; //-0.5px
    font-size: 1.083rem; //13px
  }
  .v-btn--size-x-small {
    font-size: 11px;
    border-color: $border-lighten1; //#e1e1e1
    border-radius: 0;
  }
}
.btn-text {
  @include flex(row, center, center);
  height: 40px;
  margin-right: 2rem;
  font-size: 1.083rem; //13px
  color: $font-lighten1;
  &.active,
  &:hover {
    color: $black;
  }
}
.comm-footer {
  &-wrap {
    @include flex(column, flex-start, flex-start);
    margin-bottom: 3.333rem; //40px
  }
  &-outer {
    @include flex(row, center, center);
    width: 100%;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
  }
  &-inner {
    @include flex(row, center, space-between);
    width: 1904px;
    margin: 0 auto;
    height: 100%;
  }
  &-menus {
    @include flex(row, center, flex-start);
  }
  &-info {
    @include flex(row, center, flex-start);
    width: 85%;
    margin: 2rem 0 1rem;
    flex-wrap: wrap;
    span {
      color: $font-lighten1;
      flex: 0 0 auto;
      margin: 2px 1rem 2px 0;
      &.text-strong {
        font-weight: 600;
        color: #000;
      }
    }
  }
}
</style>
