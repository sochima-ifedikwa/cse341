// express web server

const express = require('express');
const app = express();

// the port number to listen on
const port = 3000;
// the path to the static files
app.use('/', require('./routes'));

app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));

/* A code to run a simple node.js server 
const express = require('express'); This line imports the express module.
const app = express(); This line creates an instance of the express application.

app.get('/',(req, res) => {
    res.send('Hello World!');
});

const port = 3000; This line sets the port number for the server to listen on.
app.listen(process.env.PORT || port); This line starts the server listening on the specified port.
console.log('Web Server is listening at port ' + (process.env.PORT || port)); This line starts the server and logs a message to the console indicating that the server is listening.

*/
