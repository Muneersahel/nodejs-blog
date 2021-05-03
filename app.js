const express = require('express');
const app = express();
// register view engine
app.set('view engine', 'ejs')

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Blog 1', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Blog 2', snippet: 'lorem ipsum dolor sit amet consectetur'},
        {title: 'Blog 3', snippet: 'lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs: blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new Blog'})
})
app.use((req, res) => {
    res.status(404).render('404');
});