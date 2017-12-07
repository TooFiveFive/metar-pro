var express = require('express');
var router = express.Router();
_ = require('underscore');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('error', { title: 'BACKEND ERROR'});
});
_.get_data = function () {
    router.get('/', function(req, res, next) {
        res.render('error', { title: 'BACKEND ERROR'});
    });
};


module.exports = router;
