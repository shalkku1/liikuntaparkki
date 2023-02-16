const express = require('express');
const app = express();
const customRoute = require('./router');

app.use('/api', customRoute);

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})