import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import { DATABASE } from './config.js'
import authRouter from './routes/auth.js'

const app = express()

//DB
mongoose.set("strictQuery", false)
mongoose
    .connect(DATABASE)
    .then(() => console.log("db_connected"))
    .catch((err) => console.log(err))

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
//routes middleware
app.use('/api', authRouter)

app.listen(7000, () => console.log('server running on port 7000'))
