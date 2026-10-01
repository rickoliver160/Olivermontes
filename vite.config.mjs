import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/Olivermontes/',

  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'html/index.html'),
        projeto: resolve(import.meta.dirname, 'html/projeto.html'),
        cadastro: resolve(import.meta.dirname, 'html/cadastro.html')
      }
    }
  }
})