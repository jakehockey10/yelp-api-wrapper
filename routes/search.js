var express = require('express');
var qs = require('qs');
var router = express.Router();

/* GET home page. */
//: tells us that it is a variable
// query is the variable
router.get('/:query', function(req, res) {
    var yelp = req.app.locals.yelp;
    var query = qs.parse(req.params.query);
	//this search function from the json object
    yelp.search(query, function (error, data) {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
