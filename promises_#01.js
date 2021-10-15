console.log('curso de javascript web moderno/EsNext:Promise #01;') //Terça-feira,29/06/2021{feriado municipal},14:20:08 h +|-
/*let a = 1
console.log(a)*/

let p = new Promise(function(resolve){
    resolve( ['Ana', 'Carlos', 'Bia', 'Daniel']) 
})
//console.log(typeof Promise) => function 
//console.log(typeof p) object
/*p.then(function(valor) {
    console.log(valor)
})*/
/*function primeiroElemento(Array){
    return Array[0]
}
 function primeiraLetra(string){
     return string[0]
 }*/
 const  primeiroElemento = ArrayOuString => ArrayOuString[0]
 const primeiraLetra = letra => letra.toLowerCase()


p
.then(primeiroElemento)
.then(primeiroElemento)
.then(primeiraLetra)
//.then(v => console.log(v))
.then(console.log)



