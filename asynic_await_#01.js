console.log('curso de javascript web moderno/EsNext:Async/Await parte #01;') //sexta-feira,02/07/2021,22:10:08 h +|-
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
       setTimeout(function(){
           console.log('Execultando uma promessa')
           resolve('visssshimmm')
       },tempo)
    })
}
/*esperarPor(2000)
    .then(()=> console.log('Executando promise 1....'))
    .then(esperarPor)
    .then(()=> console.log('Executando promise 2....'))
    .then(esperarPor)
    .then(()=> console.log('Executando promise 3...'))
    .then(esperarPor)
    .then(()=> console.log('Executando promise 4....'))
    .then(esperarPor) execultar().then(console.log)00)
        }
*/
    function retornarValor(){
        return new Promise(resolve => {
            setTimeout(() => resolve(10), 5000)
        })
    }
 async function executar() {
   let valor = await retornarValor()
   console.log(`Async/Await ${valor}...`)
  await esperarPor(1500)
   console.log(`Async/Await ${valor + 1}...`)
   await esperarPor(1500)
   console.log(`Async/Await ${valor + 2}...`)
   return valor + 3
 }
  async function executarDeverdade() {
     const valor = await executar()
        console.log(valor)}
  executarDeverdade()
  