const express = require('express');
const create = require('./create');
const auth = require('../../middlewares/auth');

const router = express.Router({ mergeParams: true });

router.post('/', auth, create);

module.exports = router;