const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength : [5, 'Email must be at least 5 characters long'],
    },
    password : {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        select: false,
    },
    socketId : {
        type : String,
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

// methods here means that this function operates on specific user instances
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// statics means ki ye ek particular user object ki par nahi balki global model par work krega
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;