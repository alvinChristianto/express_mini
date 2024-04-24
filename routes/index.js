var express = require('express');
var router = express.Router();
const { APP_NAME } = process.env; 

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('Hello world' + APP_NAME);
});

// homepage
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

module.exports = router;
