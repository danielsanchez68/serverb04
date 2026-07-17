import ModelMem from '../model/persistencia/DAO/productosMem.js'
import ModelFile from '../model/persistencia/DAO/productosFile.js'
import ModelMongoDB from '../model/persistencia/DAO/productosMongoDB.js'

import Producto from '../model/Producto.js'
import config from '../config.js'


class Servicio {
    constructor() {
        //this.model = new ModelMem()
        //this.model = new ModelFile()
        //this.model = new ModelMongoDB()

        const opcion = config.MODO_PERSISTENCIA
        switch(opcion) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria ***')
                this.model = new ModelMem()
                break

            case 'FILE':
                console.log('*** Persistiendo en File System ***')
                this.model = new ModelFile()
                break

            case 'MONGODB':
                console.log('*** Persistiendo en MongoDB (base de datos) ***')
                this.model = new ModelMongoDB()
                break

            default:
                console.log('*** Persistiendo en Memoria (default) ***')
                this.model = new ModelMem()
                //break
        }
    }
    
    obtenerProductos = async id => {
        if(id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        const modelProducto = new Producto(producto)
        modelProducto.validar()
        
        const productoGuardado = await this.model.guardarProducto(modelProducto)
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio