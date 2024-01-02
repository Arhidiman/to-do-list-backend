import express from 'express'
import mongoose from "mongoose"
import cors from 'cors'
import router from "./router/router.js"

const PORT = 5000
const DB_URL = 'mongodb://127.0.0.1/to-do-list-db'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("server is listening on port " + PORT))

    } catch(e) {
        console.log('SERVER ERROR', e)
    }
}

startApp()




