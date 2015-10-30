var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/social', function(req, res, next) {
  var searchString = req.body.searchTerm;
  console.log(searchString);
  // http://food2fork.com/api/search?key=4ee21f110453547468b252d74f4b92c0&q=beef&sort=r
  request('http://socialmention.com/search?q=' + searchString + '&f=json&t[]=all&lang=en', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var socialStuffs = body;
      res.send(socialStuffs);
    }
  });

});


module.exports = router;


// http://socialmention.com/search?q=galvanize&t[]=blogs&t[]=all
