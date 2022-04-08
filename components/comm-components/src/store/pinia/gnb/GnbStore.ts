import { defineStore } from "pinia";
import { GnbState } from "./GnbStore-types";
import { getters } from "./getters";

export const useGnbStore = defineStore({
  id: "GnbStore",
  state: (): GnbState => ({
    userName: undefined,
    noticeCnt: 0,
    isLogin: false,
  }),

  actions: {
    setNoticeCnt(cnt: number) {
      this.$state.noticeCnt = cnt;
    },
    clearNoticeCnt() {
      this.$state.noticeCnt = 0;
    },
    login(user: { userName: string; noticeCnt: number }): boolean {
      this.$state.userName = user.userName;
      this.$state.noticeCnt = user.noticeCnt;
      this.$state.isLogin = true;
      return true;
    },
    logout(): boolean {
      this.$state.userName = undefined;
      this.$state.noticeCnt = 0;
      this.$state.isLogin = false;
      return true;
    },
  },
  getters: getters,
});
