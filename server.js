//
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers'); //llama a los helpers.js

//Si existe variable de entorno de Heroku asigna el puerto sino el 3000
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Integra HBS Engine con Express
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'caRLOS',
    });
});

app.get('/about', (req, res) => {
    res.render('parciales/about');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});