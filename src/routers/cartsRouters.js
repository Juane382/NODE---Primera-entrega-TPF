

import { Router } from "express";

import { addCart, addProductCart, cart, getCartById } from "../cartsManager.js";





export const cartsRouter = Router()




cartsRouter.post('/', async (req, res, next) => {
    try {

        let carro = new cart()
        addCart(carro)

        res.send('<h1>POST Carro</h1>')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

cartsRouter.get('/:cid', async (req, res, next) => {

    try {
        let cart = await getCartById(req.params.cid)
        console.log(cart)
        res.send('<h1>GET :cid Carro</h1>')
    } catch (error) {

    }
})

cartsRouter.post('/:cid/product/:pid', async (req, res, next) => {
    try {

        await addProductCart(req.params.cid, req.params.pid)
        res.send('<h1>POST :cid :pid Carro</h1>')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})