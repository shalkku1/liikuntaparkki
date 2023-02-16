const express = require('express');
const Utils = require('./utils');

//router basically acts like a mini app.
const router = express.Router();


router.get('/getData', function(req,res) {

    var utils = new Utils();

    return res.send(utils.getDataMock());
})


router.get('/getDataMock', function(req,res) {
    var utils = new Utils();

    return res.send(utils.getDataMock());
})

//make it available to be used in index.js
module.exports = router;