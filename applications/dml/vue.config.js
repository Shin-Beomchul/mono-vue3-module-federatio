const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

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
});
