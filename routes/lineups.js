const express = require('express');
const router = express.Router();

const lineupCtrl = require('../controllers/lineups');

router.get('/', lineupCtrl.index);
router.get('/new', lineupCtrl.newLineup);
router.post('/', lineupCtrl.create);


module.exports = router;