import config from "./config.js";
import CnxMongoDB from "./model/persistencia/CnxMongoDB.js";
import Server from "./server.js";

if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = new Server()
server.start(PORT)