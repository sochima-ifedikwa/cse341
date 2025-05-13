const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.josephRoute);
routes.get('/sochima', lesson1Controller.sochimaRoute);
routes.get('/jaja', lesson1Controller.jajaRoute);
routes.get('/chisom', lesson1Controller.chisomRoute);

module.exports = routes;