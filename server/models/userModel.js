const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    contacts: [Schema.Types.ObjectId],
    pinnedContacts: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);