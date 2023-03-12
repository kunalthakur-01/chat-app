const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    contacts: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('user', userSchema);