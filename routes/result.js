var express = require('express');
var router = express.Router();
_ = require('underscore');
var middleware = require('./middleware');


router.post('/', function(req, res) {
    var airport_id = req.body.airport_id;
    middleware.get_data(airport_id);

    middleware.pyshell[middleware.pyshell.length - 1].on('message', function (message) {
        console.log(message);
        _.data = message;
    });
    middleware.pyshell[middleware.pyshell.length - 1].end(function (err) {
        if (err) {

            _.data = "error";
            console.log(err, middleware.pyshell[middleware.pyshell.length - 1]);

        }
        console.log('finished');
    });

    console.log(airport_id);
    res.render('result', {airport: airport_id, title: 'Loading - ' + airport_id});
});

module.exports = router;
