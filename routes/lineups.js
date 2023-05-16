const express = require('express');
const router = express.Router();

const lineupCtrl = require('../controllers/lineups');

router.get('/', lineupCtrl.index);
router.get('/new', lineupCtrl.newLineup);
router.post('/', lineupCtrl.create);
router.get('/:id', lineupCtrl.show);
router.get('/:id/edit', lineupCtrl.updateLineup);
router.put('/:id', lineupCtrl.update);


module.exports = router;