console.log('curso de javascript web moderno/EsNext:Revisão #01 ;') //sexta-feira,11/06/2021,22:36:00 h +|-
console.log('let')
{
    var a = 2 
    let b = 3
    console.log('só dentro do escopo:',b)
}
console.log(a)
/*console.log(b) =>
ReferenceError: b is not defined
    at Object.<anonymous> (/home/frontenddeveloper/curso_de_javascript_web_moderno/exercicios-js/09-EsNext/revisao_#01.js:8:13)
    at Module._compile (internal/modules/cjs/loader.js:778:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
*/
console.log('Template String:')
const produto = 'iPad'
console.log(`${produto} é caro!!!!!,`)
console.log('================================')
console.log('Destructuring:')
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
const [x, y] = [1, 2, 3]
console.log(x, y)
const {idade, nome} = {nome: 'Heloisa', idade:16}
console.log( 'A idade ',idade,'anos de', nome,'!!!!')


