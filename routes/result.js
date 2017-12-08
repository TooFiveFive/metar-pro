var express = require('express');
var router = express.Router();
_ = require('underscore');
var middleware = require('./middleware');


router.post('/', function(req, res) {
    _.airport_id = req.body.airport_id;
    middleware.get_data(_.airport_id);

    middleware.pyshell[middleware.pyshell.length - 1].on('message', function (message) {
        _.data = message;
        console.log(message);
    });
    middleware.pyshell[middleware.pyshell.length - 1].end(function (err) {
        if (err) {

            _.data = "error";
            console.log(err, middleware.pyshell[middleware.pyshell.length - 1]);

        }

        console.log("finished.");
    });

    console.log(_.airport_id);
    res.render('result', {airport: _.airport_id, title: 'Loading - ' + _.airport_id});
});

module.exports = router;
