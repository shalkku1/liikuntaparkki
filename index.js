const Utils = require('./utils');
const express = require('express');
const axios = require('axios');
const app = express();
const { Client } = require('pg')



app.get('/api/getData', function(req,res) {
   var utils = new Utils();
   res.send(utils.getData());
})



var minutes = 1, the_interval = minutes * 10 * 1000;

setInterval(function() {

   const d = new Date();

   var m = (((d.getMinutes() + 7.5)/15 | 0) * 15) % 60;
   var h = ((((d.getMinutes()/105) + .5) | 0) + d.getHours()) % 24;

  // console.log('Hours' + h + ' minutes:' + m);


   axios.get('https://liikuntaparkki.fi/?controller=ajax&getentriescount=1&locationId=1', {})
   .then(function(response) {
       console.log(response.data.entriesTotal);
   });


   /*
   const client = new Client({
      user: 'liikuntaparkkidb',
      host: 'localhost',
      database: 'postgres',
      password: 'password',
      port: 5432,
   });

   client.connect()
   client.query('SELECT $1::text as message', ['Hello world!']) // your query string here
      .then(result => console.log(result.rows)) // your callback here
      .catch(e => console.error(e.stack)) // your callback here
      .then(() => client.end())*/

}, the_interval);



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})