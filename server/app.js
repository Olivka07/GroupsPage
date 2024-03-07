const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.URL_CLIENT || 'http://localhost:3000'
}))
app.use('/api/data', require('./data.route'))

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`)
        })
    } catch(e) {
        console.log(`Произошла ошибка: ${e}`)
        process.exit(1)
    }
    
}


start()