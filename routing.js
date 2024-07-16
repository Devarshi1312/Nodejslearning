const express = require('express');
const app = express();
const port = 9000;

// Middleware function y
const y = (req, res, next) => {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
};

// Middleware function z
const z = (req, res, next) => {
    console.log('Accessing another secret section ...');
    next(); // pass control to the next handler
};

// GET request to the homepage
app.get('/', y, (req, res) => {
    res.send('hello world');
});

// POST request to /yy
app.post('/yy', z, (req, res) => {
    res.send('POST request to the homepage');
});
//route paths based on string patterns
app.get('/ab?cd', (req, res) => {
    res.send('ab?cd')
  })

app.get('/ab+cd', (req, res) => {
    res.send('ab+cd')
  })
  
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })

app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })

app.get(/a/, (req, res) => {
    res.send('/a/')
  })

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  })
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
