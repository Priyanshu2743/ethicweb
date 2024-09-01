var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Fname:{
        type:String,
        required: true
    }, 
    Lname: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    college_id:{
        type:String,
        required :true,
    },
    connection:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('user', userSchema)