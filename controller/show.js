var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllShow(function (err, result) {
            if (err) throw err;
            res.render('displayShowTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.showid == null) {
        res.redirect('/show/all');
    }
    else {
        db.GetByIDShow(req.query.showid, function (err, result)
        {
            if (err) throw err;

            // Send result to the template along with the original student id in case there were no results
            res.render('displayShowInfo.ejs', {rs: result, showid: req.query.showid});
        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createShowForm.ejs', {action: '/show/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertShow( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDShow(result.insertId, function(err, result){

                    res.render('displayShowInfoSnippet.ejs', {rs: result, showid: result.insertId});

                });
            }
            else {
                res.send('Show was not inserted.');
            }
        }
    );
});


// Create Student Form
router.get('/edit', function(req, res)
{
    db.GetByIDShow(req.query.showid, function (err, result) {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('editShowForm.ejs', {action: '/show/edit', rs: result, showid: req.query.showid});
    });
});

// Save Student information
router.post('/edit', function (req, res) {
    db.UpdateShow( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(req.body);

            if(typeof req.body !== 'undefined') {
                db.GetByIDShow(req.body.ShowID, function(err, result){

                    res.render('displayShowInfoSnippet.ejs', {rs: result, showid: req.body.ShowID});

                });
            }
            else {
                res.send('Show was not inserted.');
            }
        }
    );
});


// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteShow( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Show was NOT deleted!!');
        }
        else {
            res.send('Show was deleted.');
        }
    });
});

module.exports = router;

