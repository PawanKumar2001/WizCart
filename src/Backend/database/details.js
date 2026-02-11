const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your React app (assuming it's built and located in a directory named "build")
app.use(express.static('website_test3'));

// Handle the POST request to save user details
app.post('/save-details', (req, res) => {
    const userData = {
        "First Name": req.body.firstname,
        "Last Name": req.body.lastname,
        "Email": req.body.email,
        "Gender": req.body.gender,
        "Delivery Address": req.body.address,
        "Contact Number": req.body.number,
    };

    // Write the user data to a JSON file
    fs.writeFile('User.json', JSON.stringify(userData, null, 2), (err) => {
        if (err) {
            return res.status(500).send('Error saving user details.');
        }
        res.send('User details saved successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
