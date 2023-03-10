const axios = require('axios');
const dbConnection = require('./db');

var minutes = process.env.NODE_ENV === 'production' ? 15: 1;
var the_interval = minutes * 10 * 1000;

setInterval(function() {

   const d = new Date();

   var m = (((d.getMinutes() + 7.5)/15 | 0) * 15) % 60;
   var h = ((((d.getMinutes()/105) + .5) | 0) + d.getHours()) % 24;

   axios.get('https://liikuntaparkki.fi/?controller=ajax&getentriescount=1&locationId=1', {})
   .then(function(response) {
      var query = 'INSERT INTO data ("date", "time", "visitors") VALUES ($1,$2,$3);';
      var params = [d.toLocaleDateString(), h+':'+m, response.data.entriesTotal];

      dbConnection.on('query', function (sql) {
         console.log(query);
       });

      dbConnection.query(query, params, (err, res) => {
         if (err) {
            console.log(err.stack)
         } else {
            console.log('Successful insert');
         }
      })

   });
}, the_interval);