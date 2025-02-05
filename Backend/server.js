const express = require('express')
const connectToDb = require('./src/config/db')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 8000

const db_url = process.env.DB_URL

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello, Kalvians! Your backend server is live! Testing')
})

app.listen(PORT, async()=>{
    try{

        await connectToDb(db_url)

        console.log(`Server is running on http://localhost:${PORT}`)
        console.log("Database is connected successfully")

    }

    catch(err){
        console.error(err)
    }
})