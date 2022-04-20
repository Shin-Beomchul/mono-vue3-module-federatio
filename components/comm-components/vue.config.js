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
          "./CommButton.vue": "./src/exposes/CommButton.vue",
          "./global.scss": "./src/assets/styles/global.scss",
        },
        shared: {
          vue: { singleton: true },
          pinia: { singleton: true },
        },
        devServer: {
          headers: {
            "Access-Control-Allow-Origin": "*", // product then, nginx
          },
        },
      }),
    ],
  },
  transpileDependencies: true,
});
