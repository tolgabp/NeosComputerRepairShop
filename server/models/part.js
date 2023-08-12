const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
    partType: String,
    modelName: String,
    brandName: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('Part', PartSchema);