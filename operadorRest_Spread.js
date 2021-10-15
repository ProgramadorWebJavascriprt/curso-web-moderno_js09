console.log('curso de javascript web moderno/EsNext:Operador Rest/Spread ;') //terça-feira,15/06/2021,22:15:00 h +|-
// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99 }
const clone = {ativo: true, ...funcionario} // copia;
console.log(clone)
// usar spread com Array 
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
console.log(grupoFinal)
