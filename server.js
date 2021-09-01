const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

//add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    //a query is a request to the database
    //rows gets the value returned from the request written on the left
    //if a table is returned it becomes an object
    console.log(rows);
})


//Default response for any other request (Not Found)
//goes through if /extension is not defined. keep it last!
app.use((req, res) => {//also called catchall route
    res.status(404).end();
  });

//function to start express server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});