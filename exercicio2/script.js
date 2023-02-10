const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) **Remova** o excesso de espaços no final da string;

const retirarEspacos = (frase) => {
    const novaFrase = frase.trim()

    return novaFrase
}
const novaString = retirarEspacos(minhaString)
console.log(`MINHA STRING CORTADA ${novaString}`)


// b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

console.log(minhaString.length)
console.log(novaString.length)


// c) **Substitua** os traços `________` por “sticioso”.
const substituicao = novaString.replace('________', 'sticioso')
console.log(substituicao)

// USANDO RETURN(TREINO)
/*
const calculoAreaRetangulo = (altura, largura) => {
    const area = altura * largura

   return area
    

}

const resultadoRetangulo = calculoAreaRetangulo(5, 2)
console.log(resultadoRetangulo)
*/




