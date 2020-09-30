const express = require('express')
const router = express.Router()


function logReq(req, res, next) {
    console.log('Executando a funçao middleware para a rota usuarios')
    return next()
}
router.get('/',logReq, (req, res)=>{
    res.send('Listando os usuriaos')
})

router.get('/:id',(req, res)=>{
    res.send('Listando o usuario com ID'+req.params.id)
})

module.exports = router