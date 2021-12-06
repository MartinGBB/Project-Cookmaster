const express = require('express');
const create = require('./create');
const auth = require('../../middlewares/auth');
const list = require('./list');
const find = require('./find');
const update = require('./update');
const remove = require('./remove');

const router = express.Router({ mergeParams: true });

router.post('/', auth, create);
router.get('/', list);
router.get('/:id', find);
router.put('/:id', auth, update);
router.delete('/:id', auth, remove);

module.exports = router;
