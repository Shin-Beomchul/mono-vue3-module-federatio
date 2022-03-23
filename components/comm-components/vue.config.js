const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:9002/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "comm-components",
        filename: "remoteEntry.js",
        exposes: {
          "./CommFooter": "./src/exposes/CommFooter",
          "./CommGnb": "./src/exposes/CommGnb",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 9002,
  },
});
