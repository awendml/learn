

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/user',(req, res) => {
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body: req.body
    });
});

app.get('/user', (req, res) => {
    res.send('GET USER LIST: GET /user');
});

app.get('/user/:id', (req, res) => {
    res.send('GET USER: GET /user'+req.params.id);
});

app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`) 
});