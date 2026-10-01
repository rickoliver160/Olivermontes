import sharp from 'sharp'

await sharp('imagens/ongolivermontes.jpg')
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile('imagens/ongolivermontes.webp')

await sharp('imagens/logo.png')
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile('imagens/logo.webp')

console.log('Imagens otimizadas com sucesso!')