const {Users}=require("../db/models")
const {genRandomUsername}=require("../utils/username")

async function createUser(){
    const user =await Users.create({
        username:genRandomUsername()
    })
    return user;
}

module.exports={
    createUser
}