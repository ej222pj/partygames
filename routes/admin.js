var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin' });
});

router.post('/', function (req, res) {
    console.log(req.body.username);
    console.log(req.body.password);
    res.send('Post page');
});

module.exports = router;
