const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({ 
        userName: {
        required: true,
        type: String,
    },
        password: {
        required: true,
        type: String,

    },
        isAdmin: {
        required: false,
        type: Boolean,
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
module.exports = User;
module.exports = userSchema;