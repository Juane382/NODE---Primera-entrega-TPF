import express from 'express'
import { PORT } from './config.js'
import { cartsRouter } from './routers/cartsRouters.js'
import { productsRouter } from './routers/productsRouters.js'

const app = express()


app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)


app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`)
})


