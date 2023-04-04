const express = require('express');
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

// Cors
app.options('*', cors())
app.use(cors({
    origin: 'http://127.0.0.1:5173'
}))

// Body Parser
// create application/json parser
var jsonParser = bodyParser.json()


// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'sql985.main-hosting.eu',
    user: 'u721638992_john',
    password: 'JohnRSMTest2023!',
    database: 'u721638992_rsm_test'
});


// Define a route to get all images from the database
app.get('/images', (req, res) => {
    pool.query('SELECT * FROM canvas', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving objects from database');
        } else {
            res.send(results);
        }
    });
});

// Define a route to save the canvas to the database
app.post('/images', jsonParser, (req, res) => {
    const { images } = req.body;
    pool.query('UPDATE canvas SET ? WHERE id = ?', [{ images: images }, 1], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding object to database');
        } else {
            res.send('Object saved to database');
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
