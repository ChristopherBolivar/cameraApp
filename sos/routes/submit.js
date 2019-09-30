const express = require('express');
const User = require('../models/user');
const uploadCloud = require('../config/cloudinary.js');
const router = express.Router();

/* GET home page */
router.get('/submit', (req, res, next) => {
  res.render('index');
});
router.post('/submit', uploadCloud.single('req.body.thisBlob'), (req, res, next) => {
  console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-", req.body)
 const blob = req.body.thisBlob
  User.create({
    image: blob,
})
  .then(movie => {
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
