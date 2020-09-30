const { writeFile } = require('fs')

function criandoArquivo(name, content) {
    return new Promise ((resolve, reject)=> {

        writeFile(name, content, err=> {
            if(err) return reject (err)
            resolve()
        })
    })
}

criandoArquivo('promiseArquivo.txt', 'criando um arquivo utilizando promises')
.then(() => console.log ('Arquivo promiseArquivo.txt criado com sucesso!'))
.catch(err => console.log(err))