const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const User = require('./models/user.model')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/syoft-project')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            number: req.body.number,
            role: req.body.role,
        })
        return res.json({ status: 'ok' })
    } catch (error){
        return res.json({status: 'error',})
    }
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
        password: req.body.password,
	})

    if(user) {
        return res.json({ status: "ok", user: true })
    } else {
        return res.json({ status: "error", user: false })
    }
})




app.listen(3005, ()=>{
    console.log("server is started at 3005")
})