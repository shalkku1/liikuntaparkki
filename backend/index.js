const express = require('express');
const routes = require('./routes');
const port = process.env.PORT || "8080";


const app = express();

app.use('/', routes);

app.listen(port, function () {
   console.log("Server is running!");
})