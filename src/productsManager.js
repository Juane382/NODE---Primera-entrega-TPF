import fs from 'fs/promises'




export class productManager {
    constructor(path) {
        this.products
        this.path = path
    }


    async loadProducts() {
        const txtProductos = await fs.readFile(this.path, 'utf-8')
        if (txtProductos == '') {
            fs.writeFile(this.path, '[]')
        }
        this.products = JSON.parse(await fs.readFile(this.path, 'utf-8'))

    }

    async addProduct(product) {
        await this.loadProducts()
        let validaCode

        validaCode = this.products.find(prod => prod.code == product.code) ? 1 : 0

        product.status === "" || product.status == undefined ? product.status = true : product.status = product.status // por defecto product.status es true


        if (!validaCode) {
            let flag = 0

            !product.title ? flag = 0 :
                !product.description ? flag = 0 :
                    !product.price ? flag = 0 :
                        !product.description ? flag = 0 :
                            !product.status ? flag = 0 :
                                !product.stock ? flag = 0 : flag = 1


            flag === 0 ? product.id :
                this.products.length === 0 ? product.id = 0 : product.id = ((this.products[this.products.length - 1].id) + 1) // id autoincremental segun el valor de id del ultimo elemento del array
            flag ? this.products.push(product) : console.log('pruducto incopleto') // si verifica se hace push a la lista de productos
            const json = JSON.stringify(this.products, null, 2)
            await fs.writeFile(this.path, json)
        }


        else { console.log('codigo repetido') }



    }

    async getProducts(newLong) {
        let newArrray
        await this.loadProducts()
        let oldLong = this.products.length
        if (newLong >= oldLong || newLong == undefined) {
            newArrray = this.products
        }
        else {
            let diff = newLong - oldLong
            newArrray = this.products.slice(0, diff)

        }
        return newArrray

    }

    async getProductById(i) {
        await this.loadProducts()
        const result = this.products.find(({ id }) => id == i)
        return result == undefined ? 'Producto no encontrado' : result

    }

    async updateProduct(i, content) {
        let update
        update = await this.getProductById(i)
        let keys = (Object.keys(content))
        for (const key of keys) {
            if (key != 'id') {
                if (update == 'Producto no encontrado') {
                    update = 'el producto no existe con el ID indicado'
                }
                else {
                    update[key] = content[key]
                    for (const k in this.products) {
                        if (this.products[k].id == i) {
                            this.products[k] = update
                        }

                    }
                }
            }

        }
        await fs.writeFile(this.path, JSON.stringify(this.products, null, 2))



        return update

    }

    async deleteProduct(i) {
        await this.loadProducts()
        let deleteProduct = await this.getProductById(i)
        if (deleteProduct == 'Producto no encontrado') { deleteProduct = 'el producto no existe con el ID indicado' }
        else {
            for (const key in this.products) {
                if (this.products[key].id == i) {
                    this.products.splice(key, 1)
                    await fs.writeFile(this.path, JSON.stringify(this.products, null, 2))
                }

            }

        }
        return deleteProduct
    }

}



