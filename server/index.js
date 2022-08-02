const express = require('express')


const app = express()

app.get('/hello', (req,res)=>{
    res.send("hellow works")
})

app.listen(3005, ()=>{
    console.log("server is started at 3005")
})