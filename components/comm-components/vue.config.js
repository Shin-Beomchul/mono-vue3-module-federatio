const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");
const deps = require("./package.json").dependencies;
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
          vue: { singleton: true, requiredVersion: deps.vue.requiredVersion },
          pinia: { singleton: true, requiredVersion: deps.pinia.requiredVersion },
        },
      }),
    ],
  },
  transpileDependencies: true,
  runtimeCompiler: true,
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
  devServer: {
    headers: {
      historyApiFallback: true,
      "Access-Control-Allow-Origin": "*", // 운영 전환 시 서버측에서 설정 필요.
    },
  },
});
