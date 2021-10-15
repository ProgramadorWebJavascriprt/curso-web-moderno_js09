console.log('curso de javascript web moderno/EsNext:Promises #05;') //quinta-feira,01/07/2021,21:38:08 h +|-
function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=> {
        try{
            con.log('temp')
            if(Math.random()< chanceErro) {
                reject('Ocorreu um erro!!!!')
            } else{
                  resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}
funcionarOuNao('testando...', 0.9)
    .then(v => `valor:${v}`)
    .then(
        v => consol.log(v),
       //  err => console.log(`Erro Es.: ${err}`)
        )
        .then(() => console.log('Quase fim!!!!'))
    .catch(err => console.log(`Erro Geral: ${err} `)) // tratamento de error 
    .then(()=> console.log('Fim')) // catch sempre colocar no fim da função

