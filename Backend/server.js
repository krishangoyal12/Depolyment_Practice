const express = require('express')
const app = express()
const PORT = 8000

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello, Kalvians! Your backend server is live! Testing')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})