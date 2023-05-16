const Lineup = require('../models/lineup');

function index(req, res, next) {

    Lineup.find({ user: req.user_id })
    
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
    req.body.user = req.user_id;
    Lineup.create(req.body)
      .then(() => res.redirect('/lineups'))
      .catch(next)
}

module.exports = {
    index,
    newLineup,
    create
}