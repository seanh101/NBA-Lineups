const express = require('express');
const router = express.Router();

const playerCtrl = require('../controllers/players');

router.get('/:id', playerCtrl.show)
router.post('/:lineupId', playerCtrl.addPlayerToLineup)
router.delete('/:lineupId/:playerId', playerCtrl.deletePlayerFromLineup)


module.exports = router;