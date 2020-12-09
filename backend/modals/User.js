const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now() },
    password: { type: String, required: true, unique: true },
    tokens: [{ token: { type: String } }]

});

UserSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, 'chat')
    
    this.tokens = this.tokens.concat({token})
    await this.save()
    return token
}

const User = mongoose.model('Users', UserSchema);

module.exports = User