const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

//add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//use apiRoutes
//Automatically gets all routers from index.js in apiRoutes
app.use('/api', apiRoutes);

//Default response for any other request (Not Found)
//goes through if given /extension is not defined. keep this last!
app.use((req, res) => {//also called catchall route
    res.status(404).end();
});

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});