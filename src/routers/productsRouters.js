import { Router } from "express";


export const productsRouter = Router()


productsRouter.get('/', (req, res) => {
   //console.log("desde product Router")
    res.send('<h1>consulta producto/h1>')
})

productsRouter.get('/pid', (req, res) => {
    //console.log("desde product Router")
     res.send('<h1>GET Productos :pid</h1>')
 })

 productsRouter.post('/',(req, res)=> {
    res.send('<h1>POST agrega elemnto</h1>')
 })

 productsRouter.put('/pid', (req, res) => {
    //console.log("desde product Router")
     res.send('<h1>PUT Productos :pid</h1>')
 })

 productsRouter.delete('/pid', (req,res)=>{
    res.send('<h1>DELETE Productos :pid</h1>')
 })