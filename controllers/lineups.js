const Lineup = require('../models/lineup');

function index(req, res, next) {

    Lineup.find({ user: req.user._id })
    
        .then(lineups => {
            res.render('lineups/index', { 
            lineups,
            title: 'My Lineups'
    })
})
.catch(next)
}

function newLineup(req, res) {
    res.render('lineups/new', { title:'New Lineup'})
}

function create(req, res, next) {
    console.log(req.user)
    req.body.user = req.user._id;
    console.log(req.body)
    Lineup.create(req.body)
      .then(() => res.redirect('/lineups'))
      .catch(next)
}

function show(req, res, next) {
    Lineup.findById(req.params.id)
    .then(lineup => {
        res.render('lineups/show', { 
        lineup, 
        title: 'Lineup Details'
    })
    })
    .catch(next)
}

function updateLineup(req, res, next) {
    Lineup.findById(req.params.id)
    .then((lineup) => {
        res.render('lineups/edit', {
            lineup,
            title: 'Lineup Details',
        })
    })
    .catch(next)
}

function update(req, res, next) {
	Lineup.findById(req.params.id)
		.then((lineup) => {
			if (!lineup.user.equals(req.user._id)) throw new Error('Unauthorized')
			return lineup.updateOne(req.body)
		})
		.then(() => res.redirect(`/lineups/${req.params.id}`))
		.catch(next)
}


module.exports = {
    index,
    create,
    show,
    update,
    newLineup,
    updateLineup,
    
}