

import { Router } from "express";
import { addProduct } from "../addProduct.js";
import { addCart, cart } from "../cartsManager.js";




export const cartsRouter = Router()


cartsRouter.get('/', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>GET Carro</h1>')
})

cartsRouter.post('/', async (req, res, next) => {
    try {
        //let carro = new cart('./src/static/carts.json')
        let carro = new cart()
        addCart(carro)
        console.log(carro)
        res.send('<h1>POST Carro</h1>')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

cartsRouter.get('/cid', (req, res) => {
    //console.log("desde carts Router")
    res.send('<h1>GET :cid Carro</h1>')
})

cartsRouter.post('/:cid/product/:pid', async (req, res, next) => {
    try {
        //console.log(req.params.cid)
        await addProduct(req.params.cid,req.params.pid)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    res.send('<h1>POST :cid :pid Carro</h1>')
})