import { defineConfig, esmExternalRequirePlugin } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts(),
    esmExternalRequirePlugin({
      external: ["react","react-dom"],
    }),
  ],

  build: {
    lib: {
      entry: "./src/index.ts",
      fileName: "index",
      formats: ["es"],
      name: "DevrosUI",
      cssFileName: "style",
    },
  },
})