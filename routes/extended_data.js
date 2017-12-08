var express = require('express');
var router = express.Router();
_ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
    _.extended_data = _.extended_data.substr(1);
    _.extended_data = _.extended_data.slice(0, -1);

    var data = _.extended_data.split(",");


    res.render('extended_data', { title: 'Extended data for - ' + _.airport_id + ":", data: data});
});

module.exports = router;
