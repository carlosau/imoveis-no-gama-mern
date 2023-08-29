import dotenv from 'dotenv'
dotenv.config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

export const DATABASE = `mongodb+srv://${DB_USER}:${DB_PASS}@imoveis-no-gama-mern.vjoqamp.mongodb.net/?retryWrites=true&w=majority`