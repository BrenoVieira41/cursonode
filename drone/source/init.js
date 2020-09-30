const readline = require('readline')
const { createsocket } = require ('dgram')
const commander = require ('./Commander')
const CommanderParser = require ('./CommandParser')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const TELLO_CMD_PORT = 8889
const TELLO_HOST = '192.168.10.1'

const getSocket = ()=>{
    const socket = createsocket('udp4')
    socket.bind(TELLO_CMD_PORT)
    return socket
}

(async function start (){
    const socket = getSocket()
    const cmder = new Commander(socket, TELLO_HOST, TELLO_CMD_PORT)
    await cmder.sendInitCommand()
    const cmdp = new CommandParser({
        onTakeoff: async () => {await cmder.sendTakeoff()},
        onLand: async () => {await cmder.sendLand()},
        onForward: async (dist) => {await cmder.sendForward()},
        onBack: async (dist) => {await cmder.sendBack()},
        onRight: async (dist) => {await cmder.sendRight()},
        onLeft: async (dist) => {await cmder.sendLeft()},
        onFlip: async () => {await cmder.sendFlip()},
        onBattery: async () => {await cmder.getBattery()}
    })
    console.log(`Iniciando!`)
    socket.on('message', (msg)=>{
        console.log(`Dji tello : ${msg.toStrig()}`)
    })
    socket.on('error', (err)=>{
        console.log(`Dji tello ERROR: ${err}`)
    })
    socket.on('listening', ()=>{
        console.log(`Socket is listening`)   
    })
    console.log('Enter a command:')
    rl.on('line', (line)=>{
        if(!cmdp.parseCommand(line)){
            if(line== 'exit'){
                console.log('bye')
                process.exit(0)
            }
            console.log('Not a valid command')
        }
    })
})