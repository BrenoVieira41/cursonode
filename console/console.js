console.log('Exibindo uma mensagem no console!')

//erro

console.error(new Error('Exibindo mensagem de erro, temos um problemas!'))


const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']

console.table(carros)

const dados = {name: 'Breno Henrique', estado:'Estudante'}

console.table (dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('Processo')

console.count('Processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    //console.log('-')
}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')

console.assert(false, 'Ih Rapaz %s, que pena!', 'Nao funcionou')

//limpa todos 
//console.clear()