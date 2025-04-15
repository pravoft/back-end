import express from  'express'
import 'dotenv/config'

const app = express()
const port = process.env.port

app.get("/", (req,res) => {
    res.send('<h1>Hello World</h1>')
})
app.listen(port, () => {
    console.log("Server at port ", port)
})