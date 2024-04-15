const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entryPoints: ["src/index.js"],
  loader: { ".js": "jsx", ".ts": "tsx" },
  bundle: true,
  minify: true,
  format: "cjs",
  sourcemap: true,
  outfile: "dist/output.js",
  //   external: ["react", "react-dom"],
  define: {
    "process.env.REACT_APP_ENV": JSON.stringify("production"),
  },
  plugins: [new ReactRefreshPlugin()],
};
