var express = require('express');
var router = express.Router();
_ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {

    var data = _.extended_data.split("++");

    var metar = data[0];
    var wind_dir = data[1];
    var wind_speed = data[2];
    var runway_amount = parseInt(data[3]) - 1;
    var runway_dir = data[4].replace('[', '').replace(']', '').split(',');
    var runway_picked = parseInt(data[5]) + 1;


    res.render('extended_data', { title: 'Extended data for - ' + _.airport_id + ":", metar: metar, wind_dir: wind_dir,
        wind_speed: wind_speed, runway_amount: runway_amount, runway_dir: runway_dir, runway_picked: runway_picked});
});

module.exports = router;
