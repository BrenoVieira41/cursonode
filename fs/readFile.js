const fs = require('fs')
//Nao bloqueante
fs.readFile('texto.txt', (err, data) =>{
    if(err) throw err

    //console.log(data.toString())

})

//Bloqueante
const texto = fs.readFileSync("texto.txt")

console.log(`Texto: ${texto}`)