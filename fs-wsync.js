const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do Arquivo");

const dados = fs.readfile("arquivo.txt",(err, data)=>{
    if (err) throw err;
    console.log("executando a leitura de arquivo.txt");
} );

console.log("executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));