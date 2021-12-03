const express = require('express');
const users = require('./users');

const router = express.Router({ mergeParams: true });

router.post('/', users);

module.exports = router;
