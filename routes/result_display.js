var express = require('express');
var router = express.Router();

_ = require('underscore');



router.post('/', function(req, res, next) {
    var airport_id = req.body.airport_id;

    res.render('result_display', {message: _.data, airport: airport_id});
});

module.exports = router;
