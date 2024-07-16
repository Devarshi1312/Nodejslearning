const os = require('os');

console.log('System Architecture:', os.arch());

console.log('Platform:', os.platform());

console.log('OS Type:', os.type());

console.log('OS Release:', os.release());

console.log('Total Memory:', os.totalmem());

console.log('Free Memory:', os.freemem());

console.log('CPU Info:', os.cpus());

console.log('Load Average:', os.loadavg());

console.log('Network Interfaces:', os.networkInterfaces());

console.log('User Info:', os.userInfo());

console.log('System Uptime:', os.uptime());

console.log('Hostname:', os.hostname());

console.log('Home Directory:', os.homedir());

console.log('Temp Directory:', os.tmpdir());

console.log('CPU Endianness:', os.endianness());
//used to have the present directory
console.log(__dirname)
//used to have the present filename
console.log(__filename)

const path = require('path')
console.log(path.dirname(__dirname))

console.log(path.basename(__filename))

console.log(path.extname(__filename))

console.log(path.parse(__filename))

const fs = require('fs')

fs.readFile("index.js","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

fs.writeFile('exapmle.html',"utf8",(err)=>{
    if(err){
        console.lof(err)

    }
    console.log("file created successfully")
})

const samplecontent="my name is rishi"
fs.writeFile("example.html",samplecontent,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file content is success")
    }
})


fs.rename('new.js','new.txt',(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file rename success")
})

fs.unlink("deleting.js",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file deleted successfully")
})

const http = require('http')

const myserver = http.createServer((req,res)=>{
    res.write('Welcome to server')
    res.end()
})

myserver.listen(9000)