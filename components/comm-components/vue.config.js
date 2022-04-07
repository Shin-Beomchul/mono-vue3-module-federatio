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
          "./CommGnb.vue": "./src/components/layout/CommGnb.vue",
          "./CommFooter.vue": "./src/components/layout/CommFooter.vue",
          "./CommPage.vue": "./src/components/CommPage.vue",
          "./AboutView.vue": "./src/views/AboutView.vue",
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
});
