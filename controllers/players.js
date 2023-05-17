

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

module.exports = {
    show
}