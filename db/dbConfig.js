const dotenv = require('dotenv')
dotenv.config()

const dbConfig = {
    connectionString: process.env.DATABASE_URL
}

module.exports = dbConfig