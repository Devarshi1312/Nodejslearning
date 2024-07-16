console.log("Welcome to express js")

const express = require("express")

const app =express()

const port = 9000

app.get('/rishi',(req,res)=>{
    res.send("rishi is good boy")
})

app.listen(port,()=>{
    console.log("server started successfully")
})