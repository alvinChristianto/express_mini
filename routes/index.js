var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Hello world");
});

// homepage
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

module.exports = router;
