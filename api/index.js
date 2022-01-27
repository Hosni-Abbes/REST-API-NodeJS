//IMPORT PACKAGES
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

//IMPORT ROUTES FROM ROUTES FOLDER
const postsRoute = require('./routes/posts')
const authRoute = require('./routes/auth')

//INITIALIZE APP
const app = express()

//PORT
const port = 5000

//USE BODY-PARSER TO GET ALL DATA IN JSON FORMAT
app.use(bodyParser.json())


//CONNECT TO DATABASE USING MONGOOSE
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('Database connected'))
.catch(err=>console.log(err))


//APPLICATION ROUTES
app.use('/', postsRoute)  //POSTS ROUTE
app.use('/auth', authRoute) //AUTH ROUTE


//RUN THE APPLICATION ON SERVER
app.listen(port, () => {
  console.log('Server running')
})