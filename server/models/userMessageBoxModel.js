const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userMessageBoxSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    // unseenMessages: {
    //     type: Number
    // },
    outMessages: [String],
    inMessages: [String]
});

module.exports = mongoose.model('Usermessagebox', userMessageBoxSchema);