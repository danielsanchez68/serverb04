//https://www.npmjs.com/package/joi
//https://joi.dev/
//https://joi.dev/api/18.x.x

import Joi from "joi"

class Producto {
    constructor({nombre, precio, stock}) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    /* validar() {
        if(!this.nombre) {
            throw new Error('ERROR DE MODELO (No está definido el nombre)')
        }
        if(this.precio <= 0) {
            throw new Error('ERROR DE MODELO (Precio no válido)')
        }
    } */

    validar() {
        const productoSchema = Joi.object({
            nombre: Joi.string().min(3).max(20).required(),
            precio: Joi.number().min(0).max(1000000).required(),
            stock: Joi.number().integer().min(0).max(999).required()
        })

        const producto = { nombre: this.nombre, precio: this.precio, stock: this.stock }

        const { error } = productoSchema.validate(producto)
        
        if(error) {
            //console.log(error.details[0].message)
            throw new Error(error.details[0].message)
        }
    }
}

export default Producto