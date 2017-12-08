var express = require('express');
var router = express.Router();

_ = require('underscore');



router.post('/', function(req, res, next) {

    res.render('result_display', {message: _.data, airport: _.airport_id, title: 'Result for - ' + _.airport_id});
});

module.exports = router;
