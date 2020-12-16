const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:9999/test', {useNewUrlParser: true, useUnifiedTopology: true});




var schema = new mongoose.Schema({
    mavn: String,
    adresse: String,
    lokaler: [{
        nummer: String,
        navn: String,
        sensor: [{
            _id: Number,
            temperatur: Number,
            luftfugtighed: Number,
            co2: Number,
            luftkvalitet: Number,
            lysniveau: Number,
            lysfarve: Number,
        }]
    }],

    
})

const Building = mongoose.model('Building', schema);

module.exports = Building;
