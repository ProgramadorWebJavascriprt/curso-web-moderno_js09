console.log('curso de javascript web moderno/EsNext:For Of;') //Quinta-feira,17/06/2021,21:41:14 h +|-
const { map } = require("lodash")
for (let letra of 'Andre') {
    console.log(letra)
}
const assuntosEcma = ['Map', 'Set', 'Promise']
    for (let i in assuntosEcma){
        console.log(i)
    }
    for (let assunto of assuntosEcma){
        console.log(assunto)
        }
        const assuntosMap = new Map([
            ['Map', {abordado: true}],
            ['Set',{ abordado: false}],
        ])
        for (let assunto of assuntosMap){
            console.log(assunto)
        }
        for (let chave of assuntosMap.keys()) {
            console.log(chave)
        }
        for (let valor of assuntosMap.values()){
            console.log(valor)
        }
        for(let[ch, vl] of assuntosMap.entries()){
            console.log(ch, vl)
        }
        const s = new Set(['a', 'b', 'c'])
        for (let letra of s) {
            console.log(letra)
        }
