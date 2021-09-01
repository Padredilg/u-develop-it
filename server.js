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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     //a query is a request to the database
//     //rows gets the value returned from the request written on the left
//     //if a table is returned it becomes an object
//     console.log(rows);
// })

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id>10`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

//Default response for any other request (Not Found)
//goes through if /extension is not defined. keep it last!
app.use((req, res) => {//also called catchall route
    res.status(404).end();
  });

//function to start express server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});