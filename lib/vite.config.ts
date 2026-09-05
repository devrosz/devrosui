import { defineConfig, esmExternalRequirePlugin } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts(),
    esmExternalRequirePlugin({
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^motion($|\/)/,
        /^react-icons($|\/)/,
        /^@fontsource\/geist($|\/)/,
      ],
    }),
  ],

  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es", "cjs"],
      name: "@devrosui/react",
      cssFileName: "style",
    },

    rolldownOptions: {
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
        /^motion($|\/)/,
        /^react-icons($|\/)/,
        /^@fontsource\/geist($|\/)/,
      ],
    },
  },
})