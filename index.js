// Express Connection and NPM Modules
const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');


app.listen(3400, () => {
    console.log("Connected to port 3400")
})



// Express Middleware
app.use(express.urlencoded( {extended: true}))
app.use(express.json())
// app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

// EJS Connection
app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)

// CSS Link
app.use(express.static(path.join(__dirname, 'public')))


// Route Handlers

// home
app.get('/', (req, res) => {
    res.render('home')
})

// about
app.get('/about', (req, res) => {
    res.render('pages/about')
})

// contacts
app.get('/contacts', (req, res) => {
    res.render('pages/contacts')
})

// locations
app.get('/locations', (req, res) => {
    res.render('pages/locations')
})

// menu
app.get('/menu', (req, res) => {
    res.render('pages/menu')
})


// gallery
app.get('/gallery', (req, res) => {
    res.render('pages/gallery')
})

// reviews
app.get('/reviews', (req, res) => {
    res.render('pages/reviews')
})

// reservations
app.get('/reservations', (req, res) => {
    res.render('pages/reservations')
})