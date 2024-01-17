const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'user_inputs'
});

// Connect to MySQL
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

// Endpoint to handle the form submission
app.post('/save', (req, res) => {
  const { firstName, lastName, dob } = req.body;
  
  const query = 'INSERT INTO Users (FirstName, LastName, DOB) VALUES (?, ?, ?)';
  connection.query(query, [firstName, lastName, dob], (error, results) => {
    if (error) throw error;
    res.send({ message: 'User saved successfully', id: results.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
