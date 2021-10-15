console.log('curso de javascript web moderno/EsNext:Promise #03;') //Terça-feira,29/06/2021{feriado municipal},15:30:08 h +
function gerarNumerosEntre(min, max){
    if(min > max) /*{ 
        /*let a = [min,  max]
          const[x, y, z] = a 
    }*/ [max, min] = [min, max]
    return new Promise(resolve => {
        const fator = (max - min + 1)
       const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    }) 
}
    gerarNumerosEntre(1, 60)
    .then(num => num * 10)// navegador JQueri.com
    //const array = [1, 2, 3]
    //undefined
    //array
    //Array(3) => [1, 2, 3]
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)

