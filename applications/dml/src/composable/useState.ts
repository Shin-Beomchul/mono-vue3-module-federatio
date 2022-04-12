import { readonly, ref } from "vue";

export function useState(initial) {
  const state = ref(initial);
  const set = (val) => {
    state.value = val;
  };
  return [readonly(state), set];
}
