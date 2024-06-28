var express = require('express');
var router = express.Router();

const believerCtrl = require('../controllers/believer')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

router.get('/', believerCtrl.homepage)
router.get('/about', believerCtrl.about)
router.get('/contact', believerCtrl.contact)

module.exports = router;
