console.log('curso de javascript web moderno/EsNext:Promises;') //Segunda-feira,28/06/2021,21:00:00 h +|-
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
         setImmediate(() =>{
             resolve(frase)
         }, segundos * 1000)
    })
}
falarDepoisDe(3, 'Que Legal!!!')
 .then(frase => frase.concat('?!?'))
 .then(outrafrase => console.log(outrafrase))
//.catch(e => console.log(e))
