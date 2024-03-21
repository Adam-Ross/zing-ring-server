const express = require('express')
const dbConfig = require('./db/dbConfig')

const {Pool} = require('pg')
const dotenv = require('dotenv')


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

const pool = new Pool(dbConfig)

app.get('/', async (req, res, next) => {
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
