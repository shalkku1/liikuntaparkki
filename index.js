const express = require('express');
const routes = require('./routes');

const app = express();

app.use('/', routes);


var server = app.listen(8081, function () {
   console.log("Server is running!");
})