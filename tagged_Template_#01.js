console.log('curso de javascript web moderno/EsNext:Tagged Template #01 ;') //terça-feira,15/06/2021,22:27:00 h +|-
// Tagged templates - processa o template dentro de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
