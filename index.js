// Express Connection and NPM Modules
const express = require('express');
const { parse } = require('path');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');


app.listen(3400, () => {
    console.log("Connected to port 3400")
})





// Express Middleware
app.use(express.json())
app.use(express.urlencoded( {extended: true}))
// app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

// EJS Connection
app.set('view engine', 'ejs')
app.engine('ejs', ejsMate)

// CSS Link
app.use(express.static(path.join(__dirname, 'public')))




let reviews = [
    {   
        name: 'Todd',
        date: '22-04-25',
        rating: 4,
        review: 'Food is very decent.'
    },
    {   
        name: 'James',
        date: '2022-04-18',
        rating: 3,
        review: 'The food is proper, just wish it had came in bigger quantities.'
    },
    {   
        name: 'Luis',
        date: '2022-04-12',
        rating: 5,
        review: 'The vibes and views are AMAZING.'
    },
    {   
        name: 'Yusuf',
        date: '2022-04-10',
        rating: 5,
        review: 'This place is absolutely stunning, the food and service was also great.'
    },
    {   
        name: 'Joe',
        date: '2022-03-31',
        rating: 3,
        review: 'I loved the ambience, however the food was not as savoury as I hoped it would be.'
    },
    {   
        name: 'Tony',
        date: '2022-03-24',
        rating: 5,
        review: 'I highly recommend their burgers. I always come back for them every time I get the chance'
    },
    {   
        name: 'Johnny',
        date: '2022-03-15',
        rating: 5,
        review: 'The food is very good, especially for the prices that they charge. You definetly get what you pay for'
    },
    {   
        name: 'Franklin',
        date: '2022-03-01',
        rating: 3,
        review: 'I love the food. I just wish they offered more in terms of sides'
    },
    {   
        name: 'Ray',
        date: '2022-02-25',
        rating: 4,
        review: 'Happy with the service. The place does start to get a bit too busy from 18:00 on weekends for my liking, but otherwise I always recommend this place to friends.'
    },
    {   
        name: 'Jacob',
        date: '2022-02-12',
        rating: 3,
        review: 'The place is not too bad, I do think their drinks are slightly overrated, but I do not have much to complain about with this place'
    }
    ]




    
// ROUTES
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
    res.render('pages/reviews', { reviews})
})

app.get('/stars.css', function(req, res) {
    res.sendFile(__dirname + "/" + "stars.css");
  });

app.post('/reviews', (req, res) => {
    const { name, date, rating, review } = req.body
    reviews.unshift({ name, date, rating, review })
    res.redirect('/reviews')
})

// reservations
app.get('/reservations', (req, res) => {
    res.render('pages/reservations')
})
