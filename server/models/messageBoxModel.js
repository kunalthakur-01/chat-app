const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageBoxSchema = new Schema({
    receiver: {
        type: Schema.Types.ObjectId,
        required: true
    },
    unseenMessages: {
        type: Number
    },
    outMessages: [String],
    inMessages: [String]
});

module.exports = mongoose.model('messagebox', messageBoxSchema);