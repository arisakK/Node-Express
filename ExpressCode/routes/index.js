const express = require('express');
const restaurants = require('../data');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index',{restaurants});
});

module.exports = router;
