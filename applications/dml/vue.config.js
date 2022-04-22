const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;
module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },

  configureWebpack: {
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "dml",
        filename: "remoteEntry.js",
        remotes: {
          common: "common@" + process.env.VUE_APP_COMM_HOSTNAME + "/remoteEntry.js",
        },
        shared: {
          vue: {
            singleton: true,
          },
        },
      }),
    ],
  },

  transpileDependencies: true,

  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/styles/_variables.scss";
        `,
      },
    },
    sourceMap: true,
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
