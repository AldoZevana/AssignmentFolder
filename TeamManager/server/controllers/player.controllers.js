const Player=require('../models/player.models')

module.exports.findAllPlayers=(req,res)=>{
    Player.find({})
    .then((allPlayers)=>{
        res.json(allPlayers)
    })
    .catch((err)=>{
        console.loge('Error in find all',err)
    })
},


module.exports.createPlayer=(req,res)=>{
    Player.create(req.body)
    .then((newPlayer)=>{
        res.json(newPlayer)
    })
    .catch((err)=>{
        res.status(400).json(err)
    })
},
module.exports.deletePlayer=(req,res)=>{
    Player.deleteOne({_id:req.params.id})
    .then((confirm)=>{
        res.json(confirm)
    })
    .catch((err)=>{
        console.log("Error in delete",err)
    })
},
module.exports.findOnePlayer=(req,res)=>{
    Player.findOne({_id:req.params.id})
    .then((playerOne)=>{
        res.json(playerOne)
    })
    .catch((err)=>{
        console.log("Couldn't find one",err)
    })
},
module.exports.updateStatus=(req,res)=>{
    Player.findOneAndUpdate({_id:req.params.id}, req.body,{
        new:true,runValidator:true
    })
    .then((updatedStatus)=>{
        res.json({updatedStatus})
    })
    .catch((err)=>{
        console.log("Error, couldn't update player",err)
    })
}
    
