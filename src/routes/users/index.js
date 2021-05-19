const {Router}=require('express')
const route=Router()
const { createUser,
        showUserById,
        showUserByUsername
      }=require("../../controllers/users")
route.get('/:id',async (req,res)=>{
    let user
    if(isNaN(parseInt(req.params.id))){
    //when param is a username
    user=await showUserByUsername(req.params.id)
    }else{
     user=await showUserById(req.params.id)
    }
    if(user){
        res.status(200).send(user)
    }
    else{
        res.status(400).send({
            error:"No such user exists"
        })
    }
})
route.post('/',async (req,res)=>{
  const user=await createUser()
  res.status(201).send(user)
})

module.exports={
    userRoute:route
}
