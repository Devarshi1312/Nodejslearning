const express = require("express")

const app = express()

const port = 9000

const firsth = ((req,res,next)=>{
    if(10<20){
        next()
    }
})

const secondh = ((req,res,next)=>{
    if(30<40){
        next()
    }else{
        console.log("sorry you are not allowed")
    }
})

const thirdh = ((req,res,next)=>{
    if(10>20){
        next()
    }else{
        console.log("you cant use this")
    }
})

app.get('/home', firsth , (req,res)=>{
    res.send("this is home page")
})

app.get('/about',secondh,(req,res)=>{
    res.send("this is about page")
})

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl)
    next()
  }, (req, res, next) => {
    console.log('Request Type:', req.method)
    res.send("this is user page")
    next()
  })

app.listen(port,()=>{
    console.log("Server created successfully")
})