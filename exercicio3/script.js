//Crie a const para a frase aqui
/*
console.log('ANTES DA ALTERAÇÃO . . .')
const tamanhoPartFrase = 'mas não deixe o gato sair'
const frase = ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${tamanhoPartFrase.toUpperCase()}" `
console.log(frase)

const fraseAlterada = frase.replace('verde', 'rosa').replace('azul', 'laranja')
console.log(' APOS A ALTERAÇÃO . . .')
console.log(fraseAlterada)
*/

// OUTRA FORMA DE FAZER
const tamanhoPartFrase = 'mas não deixe o gato sair'
const frase = ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${tamanhoPartFrase.toUpperCase()}" `
const novaFrase =frase.replace('verde', 'rosa').replace('azul','laranja' )
const temVerde = frase.includes('verde')
const temLaranja = frase.includes('laranja')


console.log(novaFrase)
console.log(novaFrase.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR'))
console.log(temVerde)
console.log(temLaranja)











