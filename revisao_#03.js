console.log('curso de javascript web moderno/EsNext:Revisão #03 ;') //terça-feira,15/06/2021,22:00:00 h +|-
// ES8: Obect.values/Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))
// Melhorias na Notação LIteral
const nome = 'André Luis'
const pessoa = {
    nome,
    ola(){
        return 'Fala desenvolvedor em JavaScript'
    }
}
console.log(pessoa.nome, pessoa.ola())
// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return '# partiu,correr atrás dos motoqueiros kkkkk'
    }
}
console.log(new Cachorro().falar())

