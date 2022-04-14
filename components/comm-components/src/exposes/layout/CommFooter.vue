<template>
  <footer class="footer-wrap">
    <div class="footer-menu-wrap">
      <v-row justify="space-between" align="center" class="inner">
        <v-col class="pa-0">
          <v-card flat color="transparent">
            <v-btn :ripple="false" text class="pl-0" href="https://www.naver.com" target="_blank">회사소개</v-btn>
            <v-btn :ripple="false" text to="/privacy/terms-of-service">이용약관</v-btn>
            <v-btn :ripple="false" text to="/privacy/policy">개인정보처리방침</v-btn>
            <v-btn :ripple="false" text to="#">입점문의</v-btn>
            <v-btn :ripple="false" text to="#">고객센터</v-btn>
            <v-btn :ripple="false" text href="https://www.google.com" target="_blank">뉴스제보</v-btn>
          </v-card>
        </v-col>
        <v-col cols="auto" class="d-flex flex-row align-center justify-end pa-1">
          <v-card flat color="transparent">
            <v-btn :ripple="false" text class="pa-0 ma-0" href="#" min-width="30">
              <!-- <v-icon>$vuetify.icons.facebook</v-icon> -->
            </v-btn>

            <v-btn :ripple="false" text class="pa-0 ma-0" href="#" min-width="30">
              <!-- <v-icon>$vuetify.icons.kakao</v-icon> -->
            </v-btn>
          </v-card>
          <v-card flat class="ml-3" width="180">
            <v-select
              :items="page.familysite"
              placeholder="FAMILY SITE"
              outlined
              dense
              class="rounded-0"
              hide-details
              :menu-props="{ top: true, offsetY: true }"
            ></v-select>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="footer-info-wrap">
      <v-row class="inner">
        <v-col cols="auto" class="pt-0"><a href="#0"> </a></v-col>
        <v-col>
          <v-card flat color="transparent" class="d-flex flex-row justify-start align-center flex-wrap mb-3">
            <v-sheet color="transparent" class="black--text font-weight-bold">대표 고객센터</v-sheet>
            <v-sheet color="transparent">TEL : 1588-7522 (상담가능시간 : 평일 09:00~18:00)</v-sheet>
            <v-sheet color="transparent" class="black--text font-weight-bold"
              >쇼핑몰 고객센터(전자금융거래분쟁처리담당)</v-sheet
            >
            <v-sheet color="transparent">TEL : 1544-2275 (상담가능시간 : 평일 09:00~18:00)</v-sheet>
            <v-sheet color="transparent">FAX : 02-2025-8199 E-mail : sbc0830@naver.com</v-sheet>
            <v-sheet color="transparent" class="mr-1"
              ><v-btn text x-small outlined class="rounded-0">전자장부 바로가기</v-btn></v-sheet
            >
            <v-sheet color="transparent">God 주식회사 대표이사 : 신범철</v-sheet>
            <v-sheet color="transparent">사업자등록번호 : 112-81-47103</v-sheet>
            <v-sheet color="transparent"
              >개인정보관리 책임자 : 신현복 전무이사 E-mail: grant.sbc0830g@gmail.com</v-sheet
            >
            <v-sheet color="transparent">통신판매업신고 : 서울강서 2751호11</v-sheet>
            <v-sheet color="transparent">광고매체 심의번호 : 2011-110-09-110323</v-sheet>
            <v-sheet color="transparent"
              >의료기기 판매업 신고번호 : 제18311호 의약품 도매상 허가번호 : 제2010-3740033-00002호</v-sheet
            >
            <v-sheet color="transparent">건강기능식품일반판매업 : 제2019-110084650호</v-sheet>
            <v-sheet color="transparent">직업정보제공사업 신고번호 : 서울11관악 제2012-22호</v-sheet>
            <v-sheet color="transparent">서울시 강서구 양천로 344 GodDevelop(주)</v-sheet>
            <v-sheet color="transparent">대표전화 : 02-2016-7000 FAX : 0211-2016-7001</v-sheet>
          </v-card>
          <v-card-text color="transparent" flat class="pa-0"
            >COPYRIGHT © Develop Of God IMPLANT CO., LTD. ALL RIGHTS RESERVED.</v-card-text
          >
        </v-col>
        <v-col cols="auto">
          <v-card color="transparent" flat>
            <v-icon large>mdi-bullseye</v-icon>
            <v-icon large>mdi-atom</v-icon>
            <v-icon large>mdi-atom-variant</v-icon>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <NewsTicker />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DmlFooter",

  data() {
    return {
      page: {
        familysite: ["CodingTest솔루션", "God 컴퍼니 채용", "God 주문", "God 소프트웨어", "God 인테리어", "God 케어"],
        notices: [
          { text: "9/30(수)~10/4(일) 서버점검공지", date: "2021-08-04" },
          { text: "추석연휴 배송 및 시스템 점검 안내", date: "2021-08-05" },
          { text: "God 적립금 이관 정책 공지", date: "2021-08-06" },
          { text: "8/27(목) 서버점검공지", date: "2021-08-07" },
        ],
        events: [
          { text: "7월 이벤트 당첨자 공지", date: "2021-08-04" },
          { text: "6월 초성퀴즈 이벤트 당첨자 공지", date: "2021-08-05" },
          { text: "5월 가정의달 이벤트 당첨자 공지", date: "2021-08-06" },
          { text: "4월 God 능력고사 이벤트 당첨자 공지", date: "2021-08-07" },
        ],
        mallServices: [
          { text: "God배송안내", icon: "$vuetify.icons.delivery" },
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
@import "@/assets/styles/_variables.scss";
.footer-wrap {
  background: $white;
}
.footer-mall-wrap {
  padding-bottom: 24px;
  .v-card {
    font-size: 13px !important;
    margin: 4px 0;
  }
}
.footer-menu-wrap {
  border-bottom: 1px solid $border-lighten2;
  border-top: 1px solid $border-lighten2;
}
.footer-info-wrap {
  margin-bottom: 40px;
  .v-sheet {
    font-size: 0.857rem;
    color: $font-lighten1;
    margin: 3px 2px;
  }
}
</style>
