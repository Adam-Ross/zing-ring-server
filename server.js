const express = require('express')
const cors = require('cors')
const dbConfig = require('./db/dbConfig')

const {Pool} = require('pg')
const dotenv = require('dotenv')


dotenv.config()
const app = express()
app.use(cors())
const PORT = process.env.PORT || 3000

const pool = new Pool(dbConfig)

app.use(express.static('public'))


app.get('/todos', async (req, res, next) => {
    try {
        const result = await pool.query('SELECT * FROM todos;')
        res.json(result.rows)
    } catch (error) {
        console.error(error.message)
    }
})  

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
