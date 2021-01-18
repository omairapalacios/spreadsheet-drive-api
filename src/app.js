const express = require('express');
const path = require('path');
const routes = require('./routes/google.routes');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log(__dirname)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//routes
app.use(routes);

module.exports = app;