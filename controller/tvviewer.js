var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllTVViewer(function (err, result) {
            if (err) throw err;
            res.render('displayTVViewerTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.userid == null) {
        res.redirect('/tvviewer/all');
    }
    else {
        db.GetByIDTVViewer(req.query.userid, function (err, result)
        {
            if (err) throw err;

           // Send result to the template along with the original student id in case there were no results
           res.render('displayTVViewerInfo.ejs', {rs: result, userid: req.query.userid});

        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    db.GetAllShow(function (err, result) {
        res.render('createTVViewerForm.ejs', {action: '/tvviewer/create', userid: req.query.userid, rs: result});
    });
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertTVViewer( req.body, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.redirect('/profile/?userid=' + req.body.UserID);
    });
});

// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteTVViewer( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Show has NOT been removed from list!!');
        }
        else {
            res.send('Show was deleted from list.');
        }
    });
});

module.exports = router;

