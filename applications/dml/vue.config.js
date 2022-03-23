const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  //   publicPath: "http://localhost:21101/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "dml",
        filename: "remoteEntry.js",
        remotes: {
          components: "components@http://localhost:2200/remoteEntry.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 21101,
  },
});
