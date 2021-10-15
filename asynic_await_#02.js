console.log('curso de javascript web moderno/EsNext:Async/Await parte #02;') //sexta-feira,02/07/2021,22:10:08 h +|-
function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject)=> {
        const fator = max - min + 1
       const aleatorio = parseInt(Math.random() * fator) + min
       if(numerosProibidos.includes(aleatorio)) {
            reject('Numero Repetido') // no 3º teste deu erro....
       }else{
        resolve(aleatorio)
       }
    }) 
} 
/*gerarNumerosEntre(1, 5, [1, 2, 4])
.then(console.log)
.catch(console.log)*/ 
async function gerarMegaSena(qtdeNumeros, tentativas = 1){
  const numeros = []
  try{
      for(let _ of Array(qtdeNumeros).fill()){
    numeros.push(await gerarNumerosEntre(1, 60, numeros ))
   }
 return numeros
} catch(e) {
    if(tentativas > 100) {
        throw "Perdeu Play Boy"
    } else {
        return gerarMegaSena(qtdeNumeros, tentativas + 1)
       }
    
    }
     
}
//gerarMegaSena(8) => Numero Repetido
 //gerarMegaSena(5) => [ 14, 46, 8, 58, 27 ]
// gerarMegaSena(15) => Perdeu Play Boy
gerarMegaSena(15)// => [ 18, 16, 25 ]
.then(console.log)
.catch(console.log)




