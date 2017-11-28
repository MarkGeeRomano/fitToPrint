const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const archiveSchema = Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    data: { type: Object, required: true }
});

module.exports = mongoose.model('Archive', archiveSchema);

