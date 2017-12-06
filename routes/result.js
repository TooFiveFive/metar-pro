var express = require('express');
var router = express.Router();
_ = require('underscore');

var middleware = require('./middleware');


var data = "";
middleware.pyshell.on('message', function (message) {
    console.log(message);
    data = message;
    _.data = message;
});


router.post('/', function(req, res, next) {
    var airport_id = req.body.airport_id;
    middleware.get_data(airport_id);

    console.log(airport_id);
    res.render('result', {});
});

module.exports = router;
