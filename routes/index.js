const express = require('express')
const router = express.Router()
const passport = require('passport')

/* GET home page. */
router.get('/', function (req, res, next) {
	fetch('https://www.balldontlie.io/api/v1/players?per_page=100')
		.then((res) => res.json())
		.then((player) => {
			res.render('players/index', {
				player: player.data,
				title: 'All Players',
		})
	})
})


router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get(
	'/nba',
	passport.authenticate('google', {
		successRedirect: '/',
		failureRedirect: '/',
	})
)

router.get('/logout', function (req, res) {
	req.logout(function () {
		res.redirect('/')
	})
})

module.exports = router
