const express = require('express');
const app = express();

const conf = require("./config");

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(conf.port, function () {
  console.log(`server start on http://localhost:${con.port}`);
});
