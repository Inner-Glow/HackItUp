var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  const jsFiles = [
    'javascripts/bundles/homepage/homepage.bundle.js'
];
  if (process.env.BROWSER_REFRESH_URL){
    jsFiles.push(process.env.BROWSER_REFRESH_URL)
  }
  res.render('home/index', {jsFiles});
});
router.get('/', function(req, res, next) {
  res.redirect('/home');
});

module.exports = router;
