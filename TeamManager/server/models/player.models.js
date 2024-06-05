const mongoose = require('mongoose');
const PlayerSchema= new mongoose.Schema({
    playerName:{
        type:String,
        required:[true,'Player name is required'],
        minlength:[2,'Name must be at least 2 characters long!']
    },
    preferredPosition:{
        type:String
    },
    playerStatus:{
        type:String,
        enum:['Playing','Not Playing','Undecided']
    }
},{timestamps:true})

module.exports = mongoose.model('Player',PlayerSchema);