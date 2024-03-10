//console.log("Hello"); // hello world
const express = require('express'); //creating express variable and require express from node modules
const app = express() //call express to the app variabel

//routes
app.get ('/',(req,res) => {
    res.send('Hello NODE API')
})


 //Arrow functions were introduced in ES6.Arrow functions allow us to write shorter function syntax, "hello = () => { return "Hello World!"; } ",hello = () => "Hello World!";
app.listen(3000, ()=>{
    console.log("Node API app is running on port 3000")
} )      