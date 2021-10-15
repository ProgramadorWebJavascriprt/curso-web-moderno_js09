console.log('curso de javascript web moderno/EsNext:Promises #04;') //Terça-feira,29/06/2021{feriado municipal},22:03:08 h +
function gerarNumerosEntre(min, max,tempo){
    if(min > max) /*{ 
        /*let a = [min,  max]
          const[x, y, z] = a 
    }*/ [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout (function() {
        const fator = (max - min + 1)
       const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    },tempo)
})
}
 function gerarVariosNumeros(){
     return Promise.all([
         gerarNumerosEntre(1, 60, 1000),
         gerarNumerosEntre(1, 60, 2000),
         gerarNumerosEntre(1, 60, 3000),
         gerarNumerosEntre(1, 60, 4000),
         gerarNumerosEntre(1, 60, 5000),
          ])
 }
// gerarVariosNumeros().then(numeros => console.log(numeros))
console.time('promise')
gerarVariosNumeros()
   .then(console.log)
   .then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')

   })
   
  

