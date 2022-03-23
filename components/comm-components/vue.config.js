const { defineConfig } = require("@vue/cli-service");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:2200/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "components",
        filename: "remoteEntry.js",
        library: { type: "var", name: "components" },
        exposes: {
          "./CommFooter": "./src/exposes/CommFooter",
          "./CommGnb": "./src/exposes/CommGnb",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 2200,
  },
});
