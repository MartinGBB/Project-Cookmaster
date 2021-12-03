const express = require('express');
const users = require('./users');
const login = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', users);
router.get('/', login);

module.exports = router;
