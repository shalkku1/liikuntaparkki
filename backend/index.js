const express = require('express');
const path = require('path');
const routes = require('./routes');
const port = process.env.PORT || "8080";
const app = express();

// Server Angular files from ../frontend/dist/liikuntaparkki-ui
app.use('/', express.static(path.join(__dirname, '../frontend/dist/liikuntaparkki-ui')));

// Configure other routes such as /api/
app.use('/', routes);

app.listen(port, function () {
   console.log("Server is running!");
})