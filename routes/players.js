const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/players');

router.get('/:id', playerCtrl.show)

module.exports = router;