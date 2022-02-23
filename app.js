require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

const PORT = 3000;

// connect to mongodb
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db\nPORT: ' + PORT);
    app.listen(PORT);
  })
  .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// blog routes
app.use('/blogs', blogRoutes);

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.use((req, res) => {
  res.status(404).render('404');
});
