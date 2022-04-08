import { GnbState } from "./GnbStore-types";

const getters = {
  getUserUame(state: GnbState): string | undefined {
    return state.userName ? state.userName + "님" : undefined;
  },
};
export { getters };
