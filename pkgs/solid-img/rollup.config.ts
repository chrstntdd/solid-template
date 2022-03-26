import { readFileSync } from "fs"
import * as B from "@rollup/plugin-babel"

const localPkgJson = JSON.parse(readFileSync("./package.json", "utf-8"))

export default {
  plugins: [
    B.babel({
      extensions: [".js", ".ts", ".tsx"],
      babelHelpers: "bundled",
      presets: ["solid", "@babel/preset-typescript"],
      exclude: "node_modules/**"
    })
  ],
  input: "src/img.tsx",
  external: ["solid-js", "solid-js/web"],
  output: [
    { format: "es", file: localPkgJson.module },
    { format: "cjs", file: localPkgJson.main }
  ]
}
