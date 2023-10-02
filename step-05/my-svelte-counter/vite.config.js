import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/exports.js',
      formats: ['es'],
      name: 'MyLibrary',
    }
  },
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
})
