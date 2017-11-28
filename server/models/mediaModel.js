const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    name: { type: String, required: true },
    articles: { type: Array, required: true },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Media', mediaSchema);