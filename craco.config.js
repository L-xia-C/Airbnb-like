const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
    configure: (webpackConfig, { env, paths }) => {
      // 只在生产环境禁用 source map
      if (env === "production") {
        webpackConfig.devtool = false; // 禁用 source map
      }
      return webpackConfig;
    },
  },
};