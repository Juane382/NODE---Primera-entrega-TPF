import express, { Router } from "express";
import { product } from "../product.js";
import { productManager } from "../productsManager.js";


export const productsRouter = Router()
productsRouter.use(express.json())

productsRouter.get('/', (req, res) => {
   //console.log("desde product Router")
    res.send('<h1>consulta producto/h1>')
})

productsRouter.get('/pid', (req, res) => {
     res.send('<h1>GET Productos :pid</h1>')
 })

 productsRouter.post('/',async (req, res,next)=> {

    try {
        const products = new productManager('./src/static/productos.txt')
        //console.log({...req.body})
        await products.addProduct({...req.body})
        
    } catch (error) {
        res.status(400).json({message : error.message})
    }
   

    res.send('<h1>POST agrega elemnto</h1>')
 })

 productsRouter.put('/:pid',async (req, res, next) => {

        try {
            console.log(req.params)
            console.log(req.body)
            const products = new productManager('./src/static/productos.txt')
            //await products.updateProduct(req.params.pid,req.body.)
        //res.send('<h1>PUT Productos :pid</h1>')
    } catch (error) {
        
    }
     
 })

 productsRouter.delete('/pid', (req,res)=>{
    res.send('<h1>DELETE Productos :pid</h1>')
 })