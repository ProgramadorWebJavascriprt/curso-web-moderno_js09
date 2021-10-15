console.log('curso de javascript web moderno/EsNext:Usando Callbacks aninhadas ;') //Segunda-feira,28/06/2021,21:19:48 h +|-
// sem promise...

let nomes = []
getTurma('A', alunos =>{
//console.log(alunos[0].nome)
nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
  console.log(nomes)
  getTurma('B', alunos =>{
      nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
      console.log(nomes)
       getTurma('C', alunos => {
           nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
           console.log(nomes)
       })
  })
})


