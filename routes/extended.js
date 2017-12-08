var express = require('express');
var router = express.Router();
_ = require('underscore');
var middleware = require('./middleware');

/* GET home page. */
router.get('/', function(req, res, next) {

    middleware.get_extended_data(_.airport_id);

    middleware.pyshell[middleware.pyshell.length - 1].on('message', function (message) {
        console.log(message);
        _.extended_data = message;
    });
    middleware.pyshell[middleware.pyshell.length - 1].end(function (err) {
        if (err) {

            console.log(err, middleware.pyshell[middleware.pyshell.length - 1]);

        }
        console.log('finished');
    });

    res.render('extended', { title: 'EXTENDED_DATA'});
});

module.exports = router;
