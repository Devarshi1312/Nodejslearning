const express=require('express')
app=express()
port=9001

//getting parameters from url
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })

app.get('/trains/:from-:to', (req, res) => {
    res.send(req.params)
  })

app.get('/species/:type.:animal', (req, res) => {
    res.send(req.params)
})
//different response methods
app.get('/download', (req, res) => {
    res.download('C:/Users/DELL/Desktop/nodelearning/some.txt', 'filename.txt', (err) => {
        if (err) {
            res.send('File download failed');
        }
    })
})

app.get('/end', (req, res) => {
    res.write('Ending response');
    res.end();
});

app.get('/json', (req, res) => {
    res.json({ message: 'Hello, JSON!' });
})

app.get('/jsonp', (req, res) => {
    res.jsonp({ message: 'Hello, JSONP!' });
})

app.get('/redirect', (req, res) => {
    res.redirect('https://www.youtube.com');
})

app.set('view engine', 'pug');
app.get('/render', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})

app.get('/send', (req, res) => {
    res.send('Hello, world!');
})

app.get('/sendfile', (req, res) => {
    res.sendFile('C:/Users/DELL/Desktop/nodelearning/some.txt', (err) => {
        if (err) {
            res.status(500).send('File send failed');
        }
    });
})

app.get('/sendstatus', (req, res) => {
    res.sendStatus(404); // Sends 'Not Found'
})

app.listen(port,()=>{
    console.log(`port listening in ${port}`)
})