import {EventEmitter} from 'events'

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//emissor
meuEvento.emit('seguranca', 'userAdmin', 'Alterou Salário')

meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante: '+ dados)
})

meuEvento.emit('encerrar', 'Encerrando a execução da importação de dados!')