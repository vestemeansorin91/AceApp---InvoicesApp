const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    lastName : String,
    email : {
        type : String,
        required:true
    },
    password : {
        type:String,
        required : true
    },
    isAdmin : Boolean
});

const UserCollection = mongoose.model('User', userSchema);
module.exports = UserCollection;