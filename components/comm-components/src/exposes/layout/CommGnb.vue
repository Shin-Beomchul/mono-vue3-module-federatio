<template>
  <div class="comm-gnb-wrap" :class="page.gnb.activeChannel">
    <div class="comm-gnb-inner">
      <!--global brand -->
      <div class="comm-gnb-brand">
        <router-link to="/">
          <img :src="exposeAssertsPath + '/images/common/logo-god.png'" alt="denall logo" />
        </router-link>
      </div>

      <!--global service -->
      <div class="comm-gnb-menus">
        <template v-for="(menu, index) in page.globalMenus" :key="index">
          <v-btn
            variant="text"
            size="large"
            @click="onClickGnbService($event, menu)"
            :class="menu.active == true ? 'v-btn--active ' + menu.channel : ''"
            :target="menu.target"
            >{{ menu.title }}
          </v-btn>
        </template>
      </div>

      <!--global personal -->
      <div class="comm-gnb-personal">
        <template v-if="'' == page.gnb.avatar.userName">
          <v-icon>mdi-bell-outline</v-icon><v-badge color="primary" offset-y="-14" offset-x="2" content="99+" />
        </template>
        <template v-else>
          <v-btn variant="text" @click="onClickLogin">로그인</v-btn>
          <v-btn variant="text">회원가입</v-btn>
        </template>
        <v-btn variant="text">전자장부</v-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * @author Shin-BeomChul
 * @description commGnb
 * @emits
 *  onClickGnbService(menu: { title: string, target: string, channel: ChannelType, active: boolean })
 *  onClickLogin(event: Event)
 *  onClickLoginCommSearch(event: Event)
 */
import { defineComponent, PropType, ref, toRefs } from "vue";
import { exposeAssertsPath } from "@/composables/fedrationUtil";
import { ChannelType, Values } from "@/types/comm-types";
export default defineComponent({
  name: "ComGnb",
  props: {
    channel: { type: String as PropType<Values<typeof ChannelType>>, default: ChannelType.dml },
  },
  setup(props, context) {
    const page = ref({
      globalMenus: [
        { title: "TV", target: "_self", channel: ChannelType.dtv, active: false },
        { title: "Mall", channel: ChannelType.dml, active: false },
        { title: "Education", target: "_self", channel: ChannelType.ded, active: false },
        { title: "Job", target: "_self", channel: ChannelType.djb, active: false },
        { title: "Software", target: "_self", channel: ChannelType.dsw, active: false },
        { title: "Interior", target: "_self", channel: ChannelType.dit, active: false },
        { title: "onlineEdu", target: "_self", channel: ChannelType.dme, active: false },
      ],
      gnb: {
        brand: { dentist: { show: false } },
        avatar: { userName: "홍길동" },
        userMenu: [{ title: "마이페이지" }, { title: "계정정보관리" }, { title: "로그아웃" }],
        activeChannel: "dml",
      },
    });
    let channel = toRefs(props).channel.value;
    // select btn By channel
    let a = page.value.globalMenus.find((e) => e.channel == channel);
    if (a != undefined) a.active = true;
    // select gnb line color By channel
    page.value.gnb.activeChannel = channel;

    /** GNB서비스 클릭 시 */
    const onClickGnbService = (event: Event, menu) => {
      page.value.globalMenus.forEach((e) => (e.active = menu.title == e.title ? true : false));
      page.value.globalMenus = [...page.value.globalMenus];
      page.value.gnb.activeChannel = menu.channel;
      context.emit("onClickGnbService", menu);
    };
    /**통합검색 클릭 시 */
    const onClickLoginCommSearch = (event: Event) => {
      context.emit("onClickLoginCommSearch", event);
    };
    return { page, exposeAssertsPath, onClickGnbService, onClickLoginCommSearch };
  },
  methods: {
    /** 로그인 클릭 시 */
    onClickLogin(event: Event) {
      this.$emit("onClickLogin", event);
    },
    logout() {
      location.reload();
    },
  },
});
</script>
<style lang="scss" scoped>
@mixin channel-line($channel) {
  border-bottom: 1px solid $channel;
}
@mixin channel-bg($color, $colorLight) {
  &.v-btn--active {
    &::before {
      background: linear-gradient(to right, $color, $colorLight);
    }
  }
}
:root {
  --height: 4.167rem; //50px
}
::v-deep {
  .v-btn {
    border-radius: 0;
    letter-spacing: -0.042rem; //-0.5px
    &.v-btn--size-large {
      height: 4.083rem; //49px
      border-radius: 0;
      letter-spacing: -0.042rem; //-0.5px
    }
  }
}
.comm-gnb {
  &-wrap {
    @include flex(row, center, center);
    width: 100%;
    height: var(--height);
    background: $white;

    &.dtv {
      @include channel-line($dtv);
    }
    &.dml {
      @include channel-line($dml);
    }
    &.ded {
      @include channel-line($ded);
    }
    &.djb {
      @include channel-line($djb);
    }
    &.dsw {
      @include channel-line($dsw);
    }
    &.dit {
      @include channel-line($dit);
    }
    &.dme {
      @include channel-line($dme);
    }

    border-bottom: 1px solid $comm;
  }
  &-inner {
    @include flex(row, center, space-between);
    min-width: 1904px;
    margin: 0 auto;
    height: 100%;
  }
  &-brand {
    > img {
      width: 75px;
    }
    margin-right: 1.667rem; //20px
  }
  &-menus {
    @include flex(row, center, flex-start);
    flex: 1;
    > .v-btn {
      position: relative;
      font-weight: 600;
      color: $font-darken1;
      font-size: 16px;

      &.dtv {
        @include channel-bg($dtv, $dtv-lighten1);
      }
      &.dml {
        @include channel-bg($dml, $dml-lighten1);
      }
      &.ded {
        @include channel-bg($ded, $ded-lighten1);
      }
      &.djb {
        @include channel-bg($djb, $djb-lighten1);
      }
      &.dsw {
        @include channel-bg($dsw, $dsw-lighten1);
      }
      &.dit {
        @include channel-bg($dit, $dit-lighten1);
      }
      &.dme {
        @include channel-bg($dme, $dme-lighten1);
      }
      &.comm {
        @include channel-bg($comm, $comm-lighten1);
      }

      &.v-btn--active {
        background: $white;
        box-shadow: 1px -6px 10px 1px rgba(0, 0, 0, 0.24);
        &::before {
          content: "";
          position: absolute;
          display: block;
          bottom: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, $comm, $comm-lighten1);
        }
      }
    }
  }
  &-personal {
    @include flex(row, center, flex-start);
    .v-btn {
      font-size: 1.083rem; // 13px
      color: #555;
    }
  }
}
</style>
