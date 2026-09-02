import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: ['./src/index.ts'],
            formats: ['es', 'cjs'],
            name: '@devrosui/react',
            cssFileName: 'style'
        },
        // Don't ship React with the library and let the user use his own React.
        rolldownOptions: {
            external: ['react', 'react-dom']
        }
    }
})