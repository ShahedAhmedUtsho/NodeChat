const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    mobile: {
        type: String,
        require: true,

    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,

    },
    role: {
        type: String,
        require: true,
        enum: ["admin", "user"],
        default: "user"
    },
    conversations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]



}, {
    timestamps: true
}


);

const People = new mongoose.model('People', peopleSchema);

module.exports = People


