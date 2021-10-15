

console.log('curso de javascript web moderno/EsNext:Revisão #02 ;') //terça-feira,15/06/2021,21:36:00 h +|-
// função Arrow or Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))
// Arrow Function (this)
const lexico1 = () =>  console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()
// parametro defaut 
function log(texto = 'Node'){
    console.log(texto)
}
log(undefined)
log(null)
log('Sou mais forte...')
// Operador rest
function total(...numeros) {
    let  total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))
//const { copyFileSync } = require("fs")