console.log('curso de javascript web moderno/EsNext:Async/Await;') //Terça-feira,29/06/2021{feriado municipal},13:40:08 h +|-
const http = require('http')
const { get } = require('lodash')
const getTurma = letra =>{
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res=> {
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end',() =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
       
            })
           })
    })
    
}
/* recurso do ES8
Objetivo de simplificar o usar de promises...
*/
let obterAlunos = async() => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
} // retorna um objeto AsyncFunction
obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes))
  