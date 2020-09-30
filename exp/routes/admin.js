const express = require ('express')
const router = express.Router()


router.get('/',(req, res)=>{
    res.send('Acessando administraçao')
})

router.get('/:id',(req, res)=>{
    res.send('Acessando administraçao com o id: '+req.params.id)
})

router.post('/',(req, res)=>{
    const corpo = `Login: ${req.body.login}\n
    senha: ${req.body.senha}`
    res.send('Acessando administraçao Via Post'+ corpo)
})

router.patch('/:id',(req, res)=>{
    res.send('Acessando administraçao via patch')
})

router.put('/:id',(req, res)=>{
    res.send('Acessando administraçao via put')
})

router.delete('/id',(req, res)=>{
    res.send('Acessando administraçao via delete')
})

module.exports = router