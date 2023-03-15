import fs from 'fs/promises'
import { paths } from './paths.js'
import { productManager } from './productsManager.js'


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



