const express = require('express');
const router = new express.Router();

router.use('/films', require('./films'));

router.get('/data', function(req, res) {
  res.sendFile(__dirname + './build/index.html');  // res.json({data: films});
});

router.get('/about', function(req, res) {
  res.json({data: "All about us"});
});

module.exports = router;
