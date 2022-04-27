const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/beers', async (request, response) => {
  const beers = await punkAPI.getBeers();
  response.render('beers', {beers});

});

app.get('/random-beer', async (request, response) => {
  const randomBeer = await punkAPI.getRandom();
  response.render('random-beer', {randomBeer});
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, () => console.log('🏃‍ on port 4000'));
