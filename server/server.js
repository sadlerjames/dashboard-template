//require the dependicies
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

//initalise express and routes
app.use(express.static('../client'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require the api
//require(__dirname + './routes')(app, bodyParser);

//send file
app.get('/', function(req, res) {
    res.sendFile(__dirname + './index.html');
});

//listen for the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))