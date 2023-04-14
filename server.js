// express hello world app
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello From Bulut Bilişimciler!');
});

app.listen(7878, function () {
    console.log('Example app listening on port 7878!');
});