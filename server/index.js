const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


app.post('/api/register', (req, res) => {
    console.log(req.body)
    res.json({status: 'ok'})
})

app.listen(3005, ()=>{
    console.log("server is started at 3005")
})