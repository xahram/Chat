const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const GroupSchema = new Schema({
    name: { type: String, unique: true, required: true },
    dateCreated: { type: Date, default: Date.now() },
    messages: [{ _id: mongoose.Types.ObjectId, message: { type: String } }]

});



const Group = mongoose.model('Groups', GroupSchema);

module.exports = Group