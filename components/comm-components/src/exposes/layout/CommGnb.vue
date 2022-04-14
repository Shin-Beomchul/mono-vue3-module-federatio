<template>
  <div class="gnb-wrap">
    <header class="inner">
      <v-row class="gnb-menus-wrap">
        <v-col cols="auto" class="pl-0 pr-10">
          <router-link to="/mall/main">
            <!-- <v-img src="@/assets/images/logo-denall.png" alt="denall" max-width="75" /> -->
          </router-link>
        </v-col>
        <v-col class="gnb-menus">
          <v-card flat color="transparent">
            <template v-for="(menu, index) in page.globalMenus" :key="index">
              <v-btn
                text
                class="gnb-menus-btn"
                @click="onClickGnbService($event, menu)"
                :class="{ 'v-btn--active': menu.active }"
                :target="menu.target"
                >{{ menu.title }}
              </v-btn>
            </template>
          </v-card>
        </v-col>
        <v-col cols="auto" class="gnb-personal">
          <v-card flat color="transparent" class="avatar">
            <v-card flat color="transparent" v-if="'' == page.gnb.avatar.userName">
              <v-btn text @click="signin()">로그인</v-btn>
              <v-btn text>회원가입</v-btn>
            </v-card>
            <v-card v-else flat color="transparent" class="d-flex align-center">
              <v-card flat color="transparent" class="ml-4 mt-2" min-width="40"
                ><v-icon>mdi-bell-outline</v-icon><v-badge color="primary" offset-y="-3" offset-x="8" content="99+"
              /></v-card>
              <v-menu offset-y style="display: none">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn text v-bind="attrs" v-on="on" class="pa-1 ml-2">
                    <v-card flat color="transparent" class="d-flex flex-column justify-start align-start">
                      <span>{{ page.gnb.avatar.userName }}</span>
                      <span class="dental-name">킹스치과</span>
                    </v-card>
                    <v-icon class="icon-arrow-down-outline" size="12">mdi-chevron-down</v-icon></v-btn
                  >
                </template>
                <v-list dense class="pa-0">
                  <v-list-item class="pa-1"><v-btn text>나의활동내역</v-btn></v-list-item>
                  <v-list-item class="pa-1"><v-btn text>계정정보관리</v-btn></v-list-item>
                  <v-list-item class="pa-1"><v-btn text @click="logout()">로그아웃</v-btn></v-list-item>
                </v-list>
              </v-menu>
            </v-card>
          </v-card>
          <v-card flat color="transparent">
            <v-btn text>전자장부</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComGnb",
  data() {
    return {
      page: {
        globalMenus: [
          { title: "TV", target: "_self" },
          { title: "Mall" },
          { title: "Education", target: "_self" },
          { title: "Job", target: "_self" },
          { title: "Software", target: "_self" },
          { title: "Interior", target: "_self", active: true },
          { title: "onLineEdu", target: "_self" },
        ],
        gnb: {
          brand: { dentist: { show: false } },
          avatar: { userName: "홍길동" },
          userMenu: [{ title: "마이페이지" }, { title: "계정정보관리" }, { title: "로그아웃" }],
        },
      },
    };
  },
  methods: {
    onClickGnbService(event: Event, menu) {
      this.page.globalMenus.forEach((e) => (e.active = menu.title == e.title ? true : false));
      this.page.globalMenus = [...this.page.globalMenus];
      this.$emit("onClickGnbService", menu);
    },

    signin() {
      location.href = process.env.VUE_APP_HOSTNAME_MEMBER_WEB + "/signin/id?returnUrl=" + location.href;
    },
    logout() {
      location.reload();
    },
  },
});
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.gnb-wrap {
  border-bottom: 1px solid $primary;
  height: 50px;
  background: $white;
  .inner {
    height: 50px;
  }
  .gnb-menus-wrap {
    margin: 0 !important;
    align-items: center !important;
    justify-content: center !important;
    height: 49px;
  }
  .gnb-menus.col {
    padding: 0 !important;
  }
  .gnb-menus-btn {
    position: relative;
    font-size: 16px !important;
    color: $font-lighten1 !important;
    font-weight: 700;
    height: 50px !important;
    line-height: 50px;
    border-radius: 0;
    padding: 0 22px;
  }
  .gnb-menus-btn.v-btn--active {
    font-weight: 700;
    color: $font-darken1;
  }
  .gnb-menus-btn.v-btn--active::before {
    content: "";
    background-color: $white !important;
    box-shadow: 1px -4px 6px 3px rgb(0 0 0);
    opacity: 0.2;
  }
  .gnb-menus-btn.v-btn--active::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #c01186, #f977ca);
  }
  .gnb-search-wrap {
    display: flex;
    border: 1px solid #e1e1e1;
    background-color: #ededed;
  }
  .gnb-search-wrap .v-text-field {
    margin-top: 0 !important;
  }
  .gnb-search-wrap .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: rgba(0, 0, 0, 0) !important;
  }
  .avatar .v-card {
    display: flex !important;
    align-items: center;
    justify-content: flex-start;
  }
  .dental-name {
    color: #492999;
    font-size: 11px;
  }
  .gnb-personal {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 !important;
    padding: 0;
  }
}
</style>
