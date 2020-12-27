const express = require('express');
const app = express();

const conf = require("./config");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(conf.port, function () {
  console.log('Example app listening on port 3000!');
});
