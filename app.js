const express = require("express");
const app = express();
const path = require('path');
const morgan = require('morgan');

// Settings -- Ajustes
app.set('port', 5000);
app.set('views', path.join(__dirname,"views"));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes -- Rutas
app.use(require('./routes/indez'));

// Static -- Estático
app.use(express.static(path.join(__dirname, 'public')));

// 404 handler
app.use((req, res, next) => {
    res.status(404).send('404 no lo encontró');
})


module.exports = app;