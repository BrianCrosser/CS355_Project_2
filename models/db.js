var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAllMovie = function(callback) {
    connection.query('select * from Movie',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewMovie = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Movie;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDMovie = function(movieid, callback) {
    console.log(movieid);
    var query = 'select * from Movie WHERE MovieID=' + movieid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertMovie = function(movie_info, callback) {
    console.log(movie_info);
    var query = 'INSERT INTO Movie (MovieName, YearReleased, Rating, Genre) VALUES ("' + movie_info.MovieName + '", ' + movie_info.YearReleased + ', "' + movie_info.Rating + '", "' + movie_info.Genre + '")';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.UpdateMovie = function(movie_info, callback) {
    console.log(movie_info);
    var query = 'UPDATE Movie SET MovieName="' + movie_info.MovieName + '", YearReleased=' + movie_info.YearReleased + ', Rating="' + movie_info.Rating + '", Genre="' + movie_info.Genre + '" WHERE MovieID=' + movie_info.MovieID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteMovie = function(movie_info, callback) {
    console.log(movie_info);
    var query = 'DELETE FROM Movie WHERE MovieID=' + movie_info.movieid + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllShow = function(callback) {
    connection.query('select * from TV',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewShow = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from TV;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDShow = function(showid, callback) {
    console.log(showid);
    var query = 'select * from TV WHERE ShowID=' + showid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertShow = function(show_info, callback) {
    console.log(show_info);
    var query = 'INSERT INTO TV (ShowName, Seasons, Rating, Genre, AirTime) VALUES ("' + show_info.ShowName + '", ' + show_info.Seasons + ', "' + show_info.Rating + '", "' + show_info.Genre + '", "' + show_info.AirTime + '")';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.UpdateShow = function(show_info, callback) {
    console.log(show_info);
    var query = 'UPDATE TV SET ShowName="' + show_info.ShowName + '", Seasons=' + show_info.Seasons + ', Rating="' + show_info.Rating + '", Genre="' + show_info.Genre + '", AirTime="' + show_info.AirTime + '" WHERE ShowID=' + show_info.ShowID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteShow = function(show_info, callback) {
    console.log(show_info);
    var query = 'DELETE FROM TV WHERE ShowID=' + show_info.showid + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllProfile = function(callback) {
    connection.query('select * from Profile',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewProfile = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Profile;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDProfile = function(userid, callback) {
    console.log(userid);
    var query = 'select * from Profile WHERE UserID=' + userid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertProfile = function(user_info, callback) {
    console.log(user_info);
    var query = 'INSERT INTO Profile (FirstName, LastName, Email) VALUES ("' + user_info.FirstName + '", "' + user_info.LastName + '", "' + user_info.Email + '")';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.UpdateProfile = function(user_info, callback) {
    console.log(user_info);
    var query = 'UPDATE Profile SET Email="' + user_info.Email + '", FirstName="' + user_info.FirstName + '",  LastName="' + user_info.LastName + '" WHERE UserID=' + user_info.UserID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteProfile = function(user_info, callback) {
    console.log(user_info);
    var query = 'DELETE FROM Profile WHERE UserID=' + user_info.userid + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllFriends = function(callback) {
    connection.query('select * from Friends',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewFriends = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Friends;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDFriends = function(userid, callback) {
    console.log(userid);
    var query = 'CALL GetFriend(' + userid + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertFriends = function(user_info, callback) {
    console.log(user_info);
    var query = 'CALL InsertFriend(' + user_info.UserID + ', ' + user_info.FriendID + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteFriends = function(user_info, callback) {
    console.log(user_info);
    var query = 'CALL DeleteFriend(' + user_info.UserID + ', ' + user_info.FriendID + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}