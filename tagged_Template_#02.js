console.log('curso de javascript web moderno/EsNext:Tagged Template #02;') //terça-feira,15/06/2021,22:27:00 h +|-
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor: `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)

    })
    return resultado.join('')
}
const preco = 29.99 
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)

