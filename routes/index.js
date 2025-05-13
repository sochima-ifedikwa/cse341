const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');
 
routes.get('/', lesson1Controller.josephRoute);
routes.get('/sochima', lesson1Controller.sochimaRoute);

module.exports = routes;