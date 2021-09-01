const express = require('express');

//add port designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//this gets info to show on port


//Default response for any other request (Not Found)
//goes through if /extension is not defined. keep it last!
app.use((req, res) => {
    res.status(404).end();
  });

//function to start express server on port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});