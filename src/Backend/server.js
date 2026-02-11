const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Hello');
})

app.post('/user', (req, res) => {
    // Read the existing user data from the JSON file
    const users = JSON.parse(fs.readFileSync(__dirname + './User.json', 'utf8'));
  
    const newUser = {
        empid: req.body.empid,
        password: req.body.password,
        username: req.body.username,
        designation: req.body.designation
        
    };
    users.push(newUser);
  
    fs.writeFileSync(__dirname + '/data/empdata.json', JSON.stringify(users));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
