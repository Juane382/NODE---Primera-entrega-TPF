import fs from 'fs/promises'
import { paths } from './paths.js'

export async function getCartById(idc) {

    let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
    let cart = carts.find(cart => cart.idc == idc)
    cart ? cart : cart = 'Carrito no encontrado'
    return cart
}