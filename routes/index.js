const express = require('express');
const router = express.Router();
const controler = require('../config/controller/index');

router.get('/api', controler.quotes.getApi);
router.get('/', controler.quotes.getAll);
router.post('/', controler.quotes.post);
router.put('/:id', controler.quotes.put);
router.delete('/:id', controler.quotes.delete);

module.exports = router;