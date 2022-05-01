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
  try {  
    response.render('index');
  } catch (err) {
    console.log(err);
  }
});

app.get('/beers', async (request, response) => {
  try {
    const beers = await punkAPI.getBeers();
    response.render('beers', {beers});
  } catch (err) {
    console.log(err);
  }
});

app.get('/random-beer', async (request, response) => {
  try {
    const arrayWithABeer = await punkAPI.getRandom();
    const aBeer = arrayWithABeer[0];
    response.render('aBeer', aBeer);
  } catch (err) {
    console.log(err);
  }
});

app.get('/:id', async (request, response) => {
  try {
    const arrayWithABeer = await punkAPI.getBeer(request.params.id);
    const aBeer = arrayWithABeer[0];
    response.render('aBeer', aBeer);
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
