const { build } = require("esbuild");

build(require("./esbuild.config.js")).catch(() => process.exit(1));
