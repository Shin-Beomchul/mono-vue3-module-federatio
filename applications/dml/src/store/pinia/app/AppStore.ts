import { defineStore } from "pinia";
import { AppState } from "./AppStore-types";
import { getters } from "./getters";

export const useAppStore = defineStore({
  id: "AppStore",
  state: (): AppState => ({
    userName: undefined,
    isLogin: false,
    isHttpCache: true,
    isStoreCache: true,
  }),

  actions: {
    login(user: { userName: string; token: string }): boolean {
      // call login API
      this.$state.userName = user.userName;
      this.$state.isLogin = true;
      return true;
    },
    logout(): boolean {
      this.$state.userName = undefined;
      this.$state.isLogin = false;
      return true;
    },
  },
  getters: getters,
});
