const express = require('express');
const hbs = require('hbs');

const app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getDate', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('stream', (text) => {
    return text.toUpperCase();
});
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: "Home Page",
        message: "Welcome to Home page",

    });
});

app.get('/about', (req, res) => {

    res.render('about.hbs', {
        title: "About me",
        message: "welcome to the jungle",

    });
});

app.listen(3000, () => {
    console.log("server listning on port number 3000");
});