var express = require('express');
var router = express.Router();
var error = require('./error');
_ = require('underscore');



router.post('/', function(req, res, next) {
    var airport_id = req.body.airport_id;
    console.log(_.data);

    res.render('result_display', {message: _.data, airport: airport_id, title: 'Result for - ' + airport_id});
});

module.exports = router;
