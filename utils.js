const axios = require('axios');
const express = require('express');

class Utils {

    getDataMock() {
        return [
            {
                time: '2023-01-01 15:00',
                visitors: 10

            },
            {
                time: '2023-01-01 15:15',
                visitors: 12

            },
            {
                time: '2023-01-01 15:30',
                visitors: 15

            },
            {
                time: '2023-01-01 15:45',
                visitors: 17

            },

            {
                time: '2023-01-01 16:00',
                visitors: 10

            },
        ];
    }


    getData() {
        axios.get('https://liikuntaparkki.fi/?controller=ajax&getentriescount=1&locationId=1', {})
        .then(function(response) {
            console.log(response.data);
        });
    }
};

module.exports = Utils;