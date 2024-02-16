import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { PurgeCSS } from "purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
