
console.log('curso de javascript web moderno/EsNext:Promise #02;') //Terça-feira,29/06/2021{feriado municipal},14:20:08 h +
/*setTimeout(function(){
    console.log('Execultando callback...')
    setTimeout(function(){
    console.log('Execultando callback...')
    setTimeout(function(){
        console.log('Execultando callback...')setTimeout(function(){
    console.log('Execultando callback...')
    setTimeout(function(){
    console.log('Execultando callback...')
    setTimeout(function(){
        console.log('Execultando callback...')
        },2000)console.log('curso de javascript web moderno/EsNext:Promises #05;') //quinta-feira,01/07/2021,21:38:08 h +|-

    
    },2000)


}, 2000)
}, 2000)*/
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
       setTimeout(function(){
           console.log('Execultando uma promessa')
           resolve('visssshimmm')
       },tempo)
    })
}
esperarPor()
.then(() => esperarPor())
.then(esperarPor)

