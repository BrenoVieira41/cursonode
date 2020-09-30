//throw new Error('ah não, deu erro! Não e possivel, na minha maquina funciona!')


//tente executar alguma coisa, se der erro execute o catch automaticamente

function execute() {
    executeTo()
}

function executeTo(){
    throw new Error('ah não, deu erro! Não e possivel, na minha maquina funciona!')
}

function init(){
    try {
        execute()
    } catch (e) {
        console.log(`Temos um problema! ${e}`)
    }
}

init()
console.log('Depois do erro')