import { AppState } from "./AppStore-types";

const getters = {
  getUserName(state: AppState): string | undefined {
    return state.userName ? state.userName + "님" : undefined;
  },
};
export { getters };
