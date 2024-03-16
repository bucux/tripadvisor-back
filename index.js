

const express = require('express')
const cors = require('cors')
require('dotenv').config();
const sendEmail = require("./libs/email")

const app = express()

const PORT = process.env.PORT ? process.env.PORT : 3000

app.use(cors())
app.use(express.json())

app.post('/contact', async (req, res)=>{
  try{
    await sendEmail(req.body)
    res.status(200).json({message: `${req.body.email} a reçu le message :${req.body.message}`})
  }catch(error){
    res.status(500).json({message: error.message})
  }
})

app.all('*', (req, res)=>{
  res.status(404).json({message: 'page inexistante'})
})

app.listen(PORT, ()=>{console.log(`server ok sur le port  ${PORT}`)})