

import { Router } from "express";


export const cartsRouter = Router()


cartsRouter.get('/', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>GET Carro</h1>')
})

cartsRouter.post('/', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>POST Carro</h1>')
})

cartsRouter.get('/cid', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>GET :cid Carro</h1>')
})

cartsRouter.post('/cid/product/pid', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>POST :cid :pid Carro</h1>')
})