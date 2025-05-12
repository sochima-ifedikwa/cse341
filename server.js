// express web server

const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Joseph Ifedikwa");
});


app.get('/sochima', (req, res) => {
  res.send("Sochima Ifedikwa");
});

const port = 3000;


app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));