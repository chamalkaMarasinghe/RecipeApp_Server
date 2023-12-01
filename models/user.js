const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    
    firstname : {
        type : String,
        required : true,
    },

    lastname : {
        type : String,
        required : true,
    },

    email: {
        type : String,
        unique : true,
        required : true,
    },

    phone : {
        type : String,
        required : true,
    },

    password : {
        type : String,
        required : true,
    },

    favs: {
        type: [String],
        default: [],
    },
})

module.exports = mongoose.model('User', UserSchema);