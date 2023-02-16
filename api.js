
var axios = require('axios');

axios.get('https://liikuntaparkki.fi/?controller=ajax&getentriescount=1&locationId=1', {})
.then(function(response) {
    console.log(response.data);
});
