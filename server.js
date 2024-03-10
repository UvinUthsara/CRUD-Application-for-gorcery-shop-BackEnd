/*
we are going to implement MVC architecture  Model Controller View
1.put database connection in .env file  MONGO_URL
we put routes in productRoute.js and import router from express.Router
we are making a custom middleware
because error is showing everything where is error and so and so
we are using cross site origin to connect front end with backend
now we are going to deploy over applicaton to server using render server

*/
require('dotenv').config() //import .env then we can access to dotenv file
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const errorMiddleware =require('./middleware/errorMiddleware')
const cors = require('cors')
const app = express();



const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND   

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors(corsOptions)) // using only this anyone can access to backend there fore we have to specify inside brackets


//routes

//middleware 
app.use('/api/products',productRoute);
//app.use('/api/users',userRoute);




//testing
app.get('/', (req, res) => {
   
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})

//how to use middle ware
app.use(errorMiddleware);



//mongo connection
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
})