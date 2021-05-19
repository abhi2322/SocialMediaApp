const {Router}=require('express')
const route=Router()
const {
        createNewPost,
        showAllposts
      }=require("../../controllers/posts")
route.get('/',async (req,res)=>{
    const post=await showAllposts()
    res.status(200).send(post)
})

route.post('/',async(req,res)=>{
  const{userId,title,body}=req.body
  if((!userId)||(!title)||(!body)){
    return res.status(400).send({
      error:'Need userId,title and body to create a post'
    })
  }
  const post=await createNewPost(userId,title,body)
  res.status(201).send(post)
})

module.exports={
  postRoute:route
}