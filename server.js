// imports 
const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const dotenv = require('dotenv')


//  app initialization
const app = express();


//  app configurations
dotenv.config()
app.use(cors())
app.use(parser.json())

// router imports
const rootRouter = require("./router/root")


// router defining
app.use("/",rootRouter)

// app listening 
app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("Server listening on port")
})