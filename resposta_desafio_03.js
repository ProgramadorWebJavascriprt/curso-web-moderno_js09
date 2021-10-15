console.log('curso de javascript web moderno/EsNext:resposta para o deasfio 03;') //Terça-feira,29/06/2021{feriado municipal},21:47:08 h +
const fs = require('fs')
const path = require('path')
const caminho = path.join(__dirname, 'dado.txt')
function lerArquivo(caminho){
    return new Promise(resolve =>{
     fs.readFile(caminho, function(){
     resolve(conteudo.toString())
     })
     console.log('Depois da leitura...')
    })
}
lerArquivo(caminho)
 //.then(conteudo => console.log(conteudo))
 .then(conteudo => conteudo.split('\n'))
 .then(linhas => linhas.join(','))
 .then(conteudo => `O valor final é: ${conteudo}`)

