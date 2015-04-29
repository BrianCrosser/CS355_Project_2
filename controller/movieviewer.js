var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllMovieViewer(function (err, result) {
            if (err) throw err;
            res.render('displayMovieViewerTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.userid == null) {
        res.redirect('/movieviewer/all');
    }
    else {
        db.GetByIDMovieViewer(req.query.userid, function (err, result)
        {
            if (err) throw err;

           // Send result to the template along with the original student id in case there were no results
           res.render('displayMovieViewerInfo.ejs', {rs: result, userid: req.query.userid});

        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    db.GetAllMovie(function (err, result) {
        res.render('createMovieViewerForm.ejs', {action: '/movieviewer/create', userid: req.query.userid, rs: result});
    });
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertMovieViewer( req.body, function (err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
        res.redirect('/profile/?userid=' + req.body.UserID);
/*
        else
        {
            res.send('Friend was not inserted.');
        }
*/
    });
});

// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteMovieViewer( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Movie has NOT been removed from list!!');
        }
        else {
            res.send('Movie was deleted from list.');
        }
    });
});

module.exports = router;

