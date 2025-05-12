// express web server

const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1')
 
app.get('/', lesson1Controller.josephRoute);
app.get('/sochima', lesson1Controller.sochimaRoute);

const port = 3000;


app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));