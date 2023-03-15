import fs from 'fs/promises'
import { paths } from './paths.js'


export async function  addProduct (idc,pid){
    let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
    console.log(carts)
    console.log(idc)
     let product = carts.find(cart => cart.idc== idc)
     console.log(product)
    }