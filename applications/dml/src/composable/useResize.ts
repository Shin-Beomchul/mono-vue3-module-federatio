import { onMounted, onUnmounted, reactive, toRefs } from "vue";
const useResize = (el) => {
  const state = reactive({
    screenWidth: 0,
    screenHeight: 0,
    ratiowh: 0,
    ratiohw: 0,
    rect: {},
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onResize = (event) => {
    state.screenWidth = window.innerWidth;
    state.screenHeight = window.innerHeight;
    state.ratiowh = state.screenWidth / state.screenHeight;
    state.ratiohw = state.screenHeight / state.screenWidth;

    if (el && el.value) {
      const clientRect = el.value.getBoundingClientRect();
      state.rect = {
        width: clientRect.width,
        height: clientRect.height,
        left: clientRect.left,
        right: clientRect.right,
        top: clientRect.top,
        bottom: clientRect.bottom,
      };
    }
  };

  onMounted(() => {
    window.addEventListener("resize", onResize, false);
    onResize(null);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", onResize, false);
  });

  return { ...toRefs(state) };
};

export default useResize;
