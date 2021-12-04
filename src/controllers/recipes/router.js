const express = require('express');
const create = require('./create');
const auth = require('../../middlewares/auth');
const list = require('./list');

const router = express.Router({ mergeParams: true });

router.post('/', auth, create);
router.get('/', list);

module.exports = router;