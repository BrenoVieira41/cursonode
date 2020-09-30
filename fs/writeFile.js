const {writeFile} = require ('fs')


writeFile("arquivo.txt", 'Criando Arquivo de Texto com writeFile', err =>{
    if(err) throw errconsole.log('Arquivo criado com sucesso!');
    console.log('Arquivo criado com sucesso!')
})