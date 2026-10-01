import fs from 'node:fs'
import path from 'node:path'

const dist = 'dist'
const htmlDir = path.join(dist, 'html')

for (const arquivo of ['index.html', 'projeto.html', 'cadastro.html']) {
  const origem = path.join(htmlDir, arquivo)
  const destino = path.join(dist, arquivo)

  let conteudo = fs.readFileSync(origem, 'utf8')

  conteudo = conteudo.replaceAll('../', './')

  fs.writeFileSync(destino, conteudo)
}

console.log('Arquivos HTML organizados na raiz do dist.')