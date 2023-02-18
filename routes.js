const express = require('express');
const router = express.Router();
const apiController = require('./controllers/apiController')

// API routes
 router.get('/api/getData', apiController.getData);

 module.exports = router;