var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllProfile(function (err, result) {
            if (err) throw err;
            res.render('displayProfileTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.userid == null) {
        res.redirect('/profile/all');
    }
    else {
        db.GetByIDProfile(req.query.userid, function (err, result)
        {
            if (err) throw err;
            db.GetByIDFriends(req.query.userid, function(err, result1)
            {
                db.GetByIDMovieViewer(req.query.userid, function (err, result2)
                {
                    if (err) throw err;
                    db.GetByIDTVViewer(req.query.userid, function (err, result3) {
                        if (err) throw err;

                        // Send result to the template along with the original student id in case there were no results
                        res.render('displayProfileInfo.ejs', {
                            rs: result,
                            userid: req.query.userid,
                            rs1: result1[0],
                            rs2: result2[0],
                            rs3: result3[0]
                        });
                    });
                });
            });
        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    res.render('createProfileForm.ejs', {action: '/profile/create'});
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertProfile( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                db.GetByIDProfile(result.insertId, function(err, result){

                    res.render('displayProfileInfoSnippet.ejs', {rs: result, userid: result.insertId});

                });
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

// Create Student Form
router.get('/edit', function(req, res)
{
    db.GetByIDProfile(req.query.userid, function (err, result)
    {
        if (err) throw err;

        // Send result to the template along with the original student id in case there were no results
        res.render('editProfileForm.ejs', {action: '/profile/edit', rs: result, userid: req.query.userid});
    });
});

// Save Student information
router.post('/edit', function (req, res) {
    db.UpdateProfile( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(req.body);

            if(typeof req.body != 'undefined') {
                db.GetByIDProfile(req.body.UserID, function(err, result){

                    res.render('displayProfileInfoSnippet.ejs', {rs: result, user1id: req.body.UserID});

                });
            }
            else {
                res.send('User was not inserted.');
            }
        }
    );
});

// Save Student information
router.get('/delete', function (req, res) {
    console.log(req.query);

    db.DeleteProfile( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('User was NOT deleted!!');
        }
        else {
            res.send('User was deleted.');
        }
    });
});

module.exports = router;

