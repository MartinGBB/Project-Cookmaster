const express = require('express');
const create = require('./create');
const auth = require('../../middlewares/auth');
const list = require('./list');
const find = require('./find');
const update = require('./update');
const remove = require('./remove');
const saveImage = require('./updateImg');
const uploadMiddleware = require('../../middlewares/upload');

const router = express.Router({ mergeParams: true });

router.post('/', auth, create);
router.get('/', list);
router.get('/:id', find);
router.put('/:id', auth, update);
router.delete('/:id', auth, remove);
router.put('/:id/image', auth, uploadMiddleware.single('image'), saveImage);

module.exports = router;
