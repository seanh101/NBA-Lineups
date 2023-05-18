
const Lineup = require('../models/lineup')

function show(req, res, next) {
    console.log('hello', req.params.players)
	fetch(`https://www.balldontlie.io/api/v1/players/${req.params.id}`)
		.then((res) => res.json())
		.then((player) => {
			res.render('players/show', {
				player: player,
				title: 'Player Details',
		})
	})
    .catch(next)

 }

 function addPlayerToLineup(req, res, next) {
    Lineup.findById(req.params.lineupId)
    .then((lineup) => {
        lineup.players.push(req.body)
        return lineup.save()
    })
    .then(() => res.redirect(`/lineups/${req.params.lineupId}`))
    .catch(next)
}

function deletePlayerFromLineup(req, res, next) {
    Lineup.findById(req.params.lineupId)
    .then((lineup) => {
        if (!lineup.user.equals(req.user._id)) throw new Error('Unauthorized')
        lineup.players.id(req.params.playerId).deleteOne()
        return lineup.save()
    })
    .then(() => res.redirect(`/lineups/${req.params.lineupId}`))
    .catch(next)
}

module.exports = {
    show,
    addPlayerToLineup,
    deletePlayerFromLineup
}