/*
// COM CONCATENAÇÃO
function nomeEComidaFav(nomedoUsuario, comida1, comida2, comida3) {
    // const tamanhoNome = nomedoUsuario.toUpperCase() // OUTRA FORMA DE COLOCAR LETRA MAISCULA, CRIANDO VARIAVEIS E GUARDANDO O RESULTADO DENTRO DELA.
    
    const fraseComidasFav = `Estas são as comidas favoritas do ${nomedoUsuario.toUpperCase()}
    - ${comida1}
    - ${comida2}
    - ${comida3}`
    console.log(fraseComidasFav)
}

const nomeUser = prompt('Qual o seu nome ?')
const perguntarComida1 = prompt('Qual sua comida Favorita nº1 ?')
const perguntarComida2 = prompt('Qual sua comida Favorita nº2 ?')
const perguntarComida3 = prompt('Qual a sua comida Favorita nº3')

nomeEComidaFav(nomeUser, perguntarComida1, perguntarComida2, perguntarComida3)

*/
// COM ARROWN FUNCTION
const nomeEComidaFav = (nomedoUsuario, comida1, comida2, comida3) => {

    const fraseComidasFav = `Estas são as comidas favoritas do ${nomedoUsuario.toUpperCase()}
    - ${comida1}
    - ${comida2}
    - ${comida3}`
    console.log(fraseComidasFav)
}

const nomeUser = prompt('Qual o seu nome ?')
const perguntarComida1 = prompt('Qual sua comida Favorita nº1 ?')
const perguntarComida2 = prompt('Qual sua comida Favorita nº2 ?')
const perguntarComida3 = prompt('Qual a sua comida Favorita nº3')

nomeEComidaFav(nomeUser, perguntarComida1, perguntarComida2, perguntarComida3)