const mongoose = require('mongoose');
const playerSchema = require('./player')

const lineupSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    player: [playerSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Lineup', lineupSchema);