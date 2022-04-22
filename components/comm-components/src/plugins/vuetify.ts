// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
// import icons from "@/plugins/icons";

// Vuetify
import { createVuetify, ThemeDefinition } from "vuetify";

const mTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#e41485",
    secondary: "#424242",
    accent: "#69b671",
    error: "#ff0000",
    white: "#ffffff",
    blue: "#2196F3",
    red: "#e62334",
  },
};
export default createVuetify({
  theme: {
    themes: {
      mTheme,
    },
  },
  //   iconfont: "mdi",
  //   icons: {
  //     values: Object.keys(icons).reduce((accm, iconName) => {
  //       return { ...accm, [iconName]: { component: icons[iconName] } };
  //     }, {}),
  //   },
});
// https://next.vuetifyjs.com/en/features/icon-fonts/
