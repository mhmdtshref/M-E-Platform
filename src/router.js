const express = require('express');
const path = require('path');

const controllers = require('./controllers');

const router = express.Router();

router.post('/activities', controllers.activity.add);
router.get('/activities', controllers.activity.findAll);


router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'));
});


module.exports = router;