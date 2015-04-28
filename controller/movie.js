var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllMovie(function (err, result) {
            if (err) throw err;
            res.render('displayMovieTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.movieid == null) {
        res.redirect('/movie/all');
    }
    else {
        db.GetByIDMovie(req.query.movieid, function (err, result)
        {
            if (err) throw err;

            // Send result to the template along with the original student id in case there were no results
            res.render('displayMovieInfo.ejs', {rs: result, movieid: req.query.movieid});
        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createMovieForm.ejs', {action: '/movie/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertMovie( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDMovie(result.insertId, function(err, result){

                    res.render('displayMovieInfoSnippet.ejs', {rs: result, movieid: result.insertId});

                });
            }
            else {
                res.send('Movie was not inserted.');
            }
        }
    );
});


// Create Student Form
router.get('/edit', function(req, res)
{
    db.GetByIDMovie(req.query.movieid, function (err, result) {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('editMovieForm.ejs', {action: '/movie/edit', rs: result, movieid: req.query.movieid});
    });
});

// Save Student information
router.post('/edit', function (req, res) {
    db.UpdateMovie( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(req.body);

            if(typeof req.body !== 'undefined') {
                db.GetByIDMovie(req.body.MovieID, function(err, result){

                    res.render('displayMovieInfoSnippet.ejs', {rs: result, movieid: req.body.MovieID});

                });
            }
            else {
                res.send('Movie was not inserted.');
            }
        }
    );
});


// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteMovie( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Movie was NOT deleted!!');
        }
        else {
            res.send('Movie was deleted.');
        }
    });
});

module.exports = router;

