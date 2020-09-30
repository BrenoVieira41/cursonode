const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.question('Qual a melhor marca de Drones do mundo ? ', (answer)=>{
    console.log(`A melhor marca de Drone é: ${answer}`)
        switch(answer){
            case "command" :
                console.log('Ligando o Drone')
                break;
            case "takeoff":
                console.log('Decolando o Drone!')
                break;
            default :
            console.log('Ligue o Drone!')
        }
    r1.close()
})

