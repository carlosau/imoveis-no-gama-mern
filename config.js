import dotenv from 'dotenv'
dotenv.config()
import SES from 'aws-sdk/clients/ses.js'

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

export const DATABASE = `mongodb+srv://${DB_USER}:${DB_PASS}@imoveis-no-gama-mern.vjoqamp.mongodb.net/?retryWrites=true&w=majority`

export const EMAIL_TO = process.env.EMAIL_TO
export const EMAIL_FROM = process.env.EMAIL_FROM
export const JWT_SECRET = process.env.JWT_SECRET
export const CLIENT_URL = process.env.CLIENT_URL

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'us-east-1',
    apiVersion: '2010-12-01'
}

export const AWSSES = new SES(awsConfig)        

