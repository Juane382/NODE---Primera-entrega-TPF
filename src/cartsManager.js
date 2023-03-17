
import fs from 'fs/promises'
import { paths } from './paths.js'
import { productManager } from './productsManager.js'

let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
export class cart {
    constructor(products = []) {
        this.products = products
        this.idc = carts.length + 1
        carts.push({ idc: this.idc, products: this.products })
    }

}

export async function addCart(carro) {
    carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
    carts.push(carro)
    const json = JSON.stringify(carts, null, 2)
    await fs.writeFile(paths.cart, json)

}

export async function getCartById(idc) {

    let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
    let cart = carts.find(cart => cart.idc == idc)
    cart ? cart : cart = 'Carrito no encontrado'
    return cart
}

export async function addProductCart(idc, pid) {

    let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
    let cart = carts.find(cart => cart.idc == idc)

    let prodTrue = cart.products.find(prod => prod.pid == pid)
    let index = cart.products.indexOf(prodTrue)


    const productsList = new productManager(paths.products)
    let product = await productsList.getProductById(pid)

    product === 'Producto no encontrado' ? product = '' :
        prodTrue ? cart.products.splice(index, 1, { pid: pid, quantity: cart.products[index].quantity + 1 }) :
            cart.products.push({ pid: pid, quantity: 1 })

    const json = JSON.stringify(carts, null, 2)
    await fs.writeFile(paths.cart, json)

}
