import legacy from "@vitejs/plugin-legacy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import path from "path";

// https://vitejs.dev/config/
export default ({ command }) => ({
  build: {
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        "sunset-to-sunset": "./src/tests/index.html",
        style: "./src/css/style.css",
      },
      output: {
        sourcemap: true,
        entryFileNames: `assets/[name].min.js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  publicDir: "./src/tests",
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    nodeResolve({
      moduleDirectories: ["node_modules"],
    }),
  ],
  server: {
    port: 3100,
  },
});
