import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/Olivermontes/',

  plugins: [
viteStaticCopy({
  targets: [
    {
      src: 'imagens/*',
      dest: '.'
    }
  ]
})
  ],

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