//require the dependicies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const port = 3000

//initalise express and routes
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('dotenv').config(); //get the secret key from the env file

app.set('SECRET_KEY', process.env.SECRET_KEY); // jwt secret key used for signing/verification

//require the front end
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

const login = require('./server/routes/login');
app.use('/api/v1/login', login);


//listen for the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))