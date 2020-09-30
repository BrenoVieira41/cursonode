console.log(`Nome do Arquivo:`, __filename)
console.log(`Diretório do Arquivo:`, __dirname)
console.log(`Sistema Operacional:`, process.env.OS)
console.log(`Usuário no SO:`, process.env.USERNAME)
console.log(`Idioma:`, process.env.LANG)
console.log(`Nome do Server:`, process.env.COMPUTERNAME)

switch(process.argv[2]){

    case '-a' :
        console.log('Execute rotina principal');
        break;
    case '-i' :
        console.log('Execute instalação');
        break;
    case '-q':
        console.log('Encerrar Aplicação');  
        process.exit();
        break;
    default :
        console.log('Parâmetro invalido')
}
console.log(`Ambiente do Servidor:`, process.platform)