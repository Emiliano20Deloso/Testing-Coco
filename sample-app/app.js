const express = require('express');

const app = express();
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello from sample app');
});

app.get("/name/:name", (req, res) => {
    res.send (`Hello ${req.params.name}`);
    //res.render("hello", { name: req.params.name });
});

module.exports = app;
