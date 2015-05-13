var express = require('express');
var router = express.Router();
var db   = require('../models/db');


// Example 1: Return the home page
//router.get('/', function(req, res){
//    res.render('displayHomePage.ejs', {root: './views'});
//});

router.get('/', function(req, res) {
    db.GetInfo(function (err, result) {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('displayHomePage.ejs', {rs: result[0], rs1: result[1], rs2: result[2]});
    });
});

module.exports = router;

