const {Users}=require("../db/models");
const users = require("../routes/users");
const {genRandomUsername}=require("../utils/username")

async function createUser(){
    const user =await Users.create({
        username:genRandomUsername()
    })
    return user;
}

async function showUserById(id){
    return await Users.findOne({where:{id}})
}
async function showUserByUsername(username){
    return await Users.findOne({where:{username}})
}

module.exports={
    createUser,
    showUserById,
    showUserByUsername
}