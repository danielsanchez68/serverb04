class ModelMem {
    constructor() {
        this.productos = [
            { id: '1', nombre: 'Prod1', precio: 1234, stock: 55 },
            { id: '2', nombre: 'Prod2', precio: 2345, stock: 77 },
            { id: '3', nombre: 'Prod3', precio: 3456, stock: 99 },
        ]
    }

    obtenerProductos = async () => this.productos

    obtenerProducto = async id => this.productos.find(p => p.id == id) || {}

    guardarProducto = async producto => {
        producto.id = String(parseInt(this.productos[this.productos.length-1]?.id || '0') + 1)
        this.productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex(p => p.id == id)
        const productoAactualizar = this.productos[index]

        const productoNuevo = { ...productoAactualizar, ...producto }
        this.productos.splice(index, 1, productoNuevo)

        return productoNuevo
    }

    borrarProducto = async id => {
        const index = this.productos.findIndex(p => p.id == id)
        const producto = this.productos.splice(index, 1)[0]
        return producto
    }
}

export default ModelMem