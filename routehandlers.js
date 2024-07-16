const express = require('express')
const app = express()
const port = 9002

app.get('/example/a', (req, res) => {
    res.send('Hello from A!')
  })

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from B!')
  })

//array of callback functions are sent 
const cb0 = function (req, res, next) {
    console.log('CB0')
   // res.send("hi")
    next()
  }
  
const cb1 = function (req, res, next) {
    console.log('CB1')
    //res.send("hello")
    next()
  }
  
const cb2 = function (req, res) {
    console.log('CB2')
    res.send('Hello from C!')
  }
  
app.get('/example/c', [cb0, cb1, cb2])
//A combination of independent functions and arrays of functions can handle a route.
const cb3= function(req,res,next){
    console.log('CB3')
    next()
}

const cb4 = function(req,res,next){
    console.log('CB4')
    next()
}


app.get('/example/d', [cb3, cb4], (req, res, next) => {
    console.log('the response will be sent by the next function ...')
    next()
  }, (req, res) => {
    res.send('Hello from D!')
  })


app.listen(port,()=>{
    console.log(`server listening on ${port}`)
})