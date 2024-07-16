const express = require('express');
const app = express();
const port = 3000;

// Sample data
const users = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        city: "New York"
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        city: "San Francisco"
    },
    {
        id: 3,
        name: "Mike Johnson",
        age: 35,
        city: "Chicago"
    }
];

// Define a route that returns JSON
app.get('/users', (req, res) => {
    res.json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
