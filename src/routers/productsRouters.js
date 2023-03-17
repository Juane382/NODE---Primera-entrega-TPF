import express, { Router } from "express";
import { paths } from "../paths.js";
import { product } from "../product.js";
import { productManager } from "../productsManager.js";


export const productsRouter = Router()
productsRouter.use(express.json())

productsRouter.get('/', async (req, res, next) => {
    try {
        const products = new productManager(paths.products)
        let product = JSON.stringify(await products.getProducts())
        res.send(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})

productsRouter.get('/pid', (req, res) => {
    res.send('<h1>GET Productos :pid</h1>')
})

productsRouter.post('/', async (req, res, next) => {

    try {
        const products = new productManager(paths.products)
        await products.addProduct({ ...req.body })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    res.send('<h1>POST agrega elemnto</h1>')
})

productsRouter.put('/:pid', async (req, res, next) => {

    try {
        const products = new productManager(paths.products)
        await products.updateProduct(req.params.pid, req.body)
        res.send('<h1>PUT actualiza elemento</h1>')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    
})

productsRouter.delete('/:pid', async (req, res, next) => {
    try {
        const products = new productManager(paths.products)
        await products.deleteProduct(req.params.pid)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
    res.send('<h1>DELETE Productos :pid</h1>')
})