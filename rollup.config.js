import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";

export default {
  input: "frontend/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [json(), commonjs(), nodeResolve({ browser: true }), typescript()],
};
