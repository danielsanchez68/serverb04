import express from 'express'

import RouterProductos from './router/productos.js'


class Server {
    constructor() {
        this.routerProductos = new RouterProductos()
    }

    start(port) {
        const app = express()
        app.use(express.json())

        // ------------ Rutas / endpoints API REST productos -----------
        app.use('/api/productos', this.routerProductos.get())

        const PORT = port
        const server = app.listen(PORT, () => console.log(`Servidor APIRESTful con express escuchando en http://localhost:${PORT}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server