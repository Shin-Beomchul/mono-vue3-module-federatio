const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

module.exports = defineConfig({
  pages: {
    index: {
      entry: "./src/index.ts",
    },
  },
  publicPath: "auto",
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new webpack.container.ModuleFederationPlugin({
        name: "common",
        filename: "remoteEntry.js",
        exposes: {
          "./CommGnb.vue": "./src/exposes/layout/CommGnb.vue",
          "./CommFooter.vue": "./src/exposes/layout/CommFooter.vue",
          "./CommPage.vue": "./src/exposes/CommPage.vue",
          "./AboutView.vue": "./src/exposes/AboutView.vue",
          "./GnbStore": "./src/store/pinia/gnb/GnbStore",
          "./ko.json": "./src/exposes/statics/ko.js",
          "./en.json": "./src/exposes/statics/en.js",
        },
        shared: {
          vue: { singleton: true },
          pinia: { singleton: true },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
