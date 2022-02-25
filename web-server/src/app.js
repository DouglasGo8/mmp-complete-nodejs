import "core-js/stable";
import "regenerator-runtime/runtime";
//
import hbs from 'hbs';
import path from "path";
import express from "express";
//
const app = express();
const log = console.log;
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
//
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
//
app.use(express.static(path.join(__dirname, "../public")))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Author 1'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Author 2'
  })
})

app.get("/help", (req, res) => {
  res.render('help', {
    helpText: "Help Page",
    title: 'Help',
    name: 'Author 3'
  });
});

app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: 'Error Message'
    })
  }

  res.send({
    forescat: 'It is snowning',
    location: 'Philadelphia',
    address: req.query.address
  })
})


app.get('/products', (req, res) => {

  if (!req.query.search) {
    return res.send({
      error: 'Error message'
    })
  }
  //
  res.send({
    products: []
  })

});


app.get('/help/*', (req, res) => {
  res.render('404', {
    errorMessage: "Not found page",
    title: '404',
    name: 'Page not found'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: "Not found page",
    title: '404',
    name: 'Page not found'
  })
})


//log("NodeJs Rocks!!!");

app.listen(3000, () => {
  log("Server running");
});
