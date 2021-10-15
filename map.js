console.log('curso de javascript web moderno/EsNext:Map ;') //Quinta-feira,17/06/2021,21:41:14 h +|-
const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})
console.log(tecnologias.react)// modo incorreto
console.log(tecnologias.get('react').framework) // modo correto
console.log(tecnologias.get('react')) // modo correto
console.log(tecnologias.get('angular')) // modo correto

/*const chavesVariadas = new Map([
[function () {}, 'Função'],
[{}, 'Objeto'],'((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

/*chavesVariadas.set((123, 'a'),
chavesVariadas.set(123, 'b'),
chavesVariadas.set(456, 'b'),
console.log('chavesVariadas')*/
