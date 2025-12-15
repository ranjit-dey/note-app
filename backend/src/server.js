import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db.config.js'
import notesRoutes from './routes/notesRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 5002

const app = express()
connectDB()

app.get('/', (req, res) => {
    res.status(200).send(
        '<h1 style="font-family: system-ui, sans-serif; font-weight: bold;">Notes taking application</h1>',
    )
})

// middleware
app.use(express.json())
app.use('/api/notes', notesRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}\nvisit : http://localhost:5001`)
})
