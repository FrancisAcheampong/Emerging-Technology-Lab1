let express = require('express');
let router = express.Router();

// need a require statement

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

/* GET feedback page. */
router.get('../app/views/feedback', (req, res, next) => {
  res.render('feedback', { title: 'Feedback' });
});

/* GET thank you page. */
router.get('../app/views/thankyou', (req, res, next) => {
  res.render('thankyou', { title: 'Thank_you' });
});

module.exports = router;
