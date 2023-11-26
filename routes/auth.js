const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('local', { /* ... */ }));

router.post('/register', (req, res) => {
  /* ... */
});

router.post('/forgot', (req, res) => {
  /* ... */
});

module.exports = router;