
require('dotenv').config();
const express = require('express');
const app = express();
const { mailchimp } = require('./mailchimp');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const PORT = 3000;

app.use(helmet());
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});


// Mailchimp section
app.post('/', mailchimp);
app.post('/failure', (req, res) => {
    res.redirect('/');
})


app.listen(PORT, () => {
    console.log('App is up & running on port ' + PORT);
});
