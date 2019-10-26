const knex = require('knex')

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
}

module.exports = knex({
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
})