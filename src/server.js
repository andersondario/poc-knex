if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
}

require('./db/connection')

const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 8080)