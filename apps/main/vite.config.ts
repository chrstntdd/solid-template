/// <reference types="vitest" />
/// <reference types="vite/client" />
import { readFileSync } from "fs"
import { sep, resolve } from "path"

import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let localPkgsRe = /pkgs\/(?<pkg_name>[a-z-]+)\//
  let sharedResolve = {
    alias: {
      "~": resolve("src")
    }
  }

  return {
    test: {
      environment: "jsdom",
      transformMode: {
        web: [/\.[jt]sx?$/]
      },
      setupFile: "/setup-vitest.ts",
      // solid needs to be inline to work around
      // a resolution issue in vitest:
      deps: {
        inline: [/solid-js/]
      },
      // if you have few tests, try commenting one
      // or both out to improve performance:
      threads: false,
      isolate: false
    },

    resolve:
      mode === "test"
        ? {
            ...sharedResolve,
            conditions: ["development", "browser"]
          }
        : sharedResolve,

    plugins: [vanillaExtractPlugin(), solid()],
    build: {
      rollupOptions: {
        output: {
          // Manual chunking for better caching
          manualChunks(id) {
            let pkg
            if ((pkg = localPkgsRe.exec(id)?.groups?.pkg_name)) {
              return `pkg-${pkg}`
            }

            if (!id.endsWith(".css") && id.includes("node_modules")) {
              let directories = id.split(sep)
              let name =
                directories[directories.lastIndexOf("node_modules") + 1]

              if (name.includes("solid-js")) {
                return "vend-fw"
              }

              // Defer to default behavior
            }
          }
        }
      }
    },
    server: {
      https: {
        key: readFileSync("localhost-key.pem"),
        cert: readFileSync("localhost.pem")
      }
    }
  }
})
