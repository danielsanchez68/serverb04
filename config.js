import dotenv from 'dotenv'

dotenv.config()

//console.log(process.env)
//console.log(process.env.OneDrive)

/* console.log('process.env.MODO_PERSISTENCIA:', process.env.MODO_PERSISTENCIA)
console.log('process.env.STRCNX:', process.env.STRCNX)
console.log('process.env.BASE:', process.env.BASE) */

const PORT = process.env.PORT || 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || ''
const STRCNX = process.env.STRCNX || 'mongodb://localhost:27017'
const BASE = process.env.BASE || 'test'

export default {
    PORT,
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}