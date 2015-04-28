var express = require('express');
var router  = express.Router();
var db   = require('../models/db');


/* View all students in a <table> */
router.get('/all', function (req, res) {
    db.GetAllFriends(function (err, result) {
            if (err) throw err;
            res.render('displayFriendsTable.ejs', {rs: result});
        }
    );
});


/* View a single students information */
router.get('/', function (req, res) {
    if(req.query.userid == null) {
        res.redirect('/friends/all');
    }
    else {
        db.GetByIDFriends(req.query.userid, function (err, result)
        {
            if (err) throw err;

           // Send result to the template along with the original student id in case there were no results
           res.render('displayFriendsInfo.ejs', {rs: result, userid: req.query.userid});

        });
    }
});

// Create Student Form
router.get('/create', function(req, res){
    db.GetAllProfile(function (err, result) {
        res.render('createFriendsForm.ejs', {action: '/friends/create', userid: req.query.userid, rs: result});
    });
});

// Save Student information
router.post('/create', function (req, res) {
    db.InsertFriends( req.body, function (err, result) {
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

    db.DeleteFriends( req.query, function (err, result)
    {
        if (err) {
            throw err;
        }
        console.log(req.query);

        if(!result)
        {
            res.send('Friendship was NOT deleted!!');
        }
        else {
            res.send('Friendship was deleted.');
        }
    });
});

module.exports = router;

