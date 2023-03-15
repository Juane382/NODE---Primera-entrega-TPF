
import fs from 'fs/promises'
import { paths } from './paths.js'

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
