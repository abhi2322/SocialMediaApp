const {Posts,Users}=require("../db/models")

async function createNewPost(userId,title,body){
    const posts=await Posts.create({
        title,
        userId,
        body
    })
    return posts
}

async function showAllposts(query){
    const posts=await Posts.findAll({
        include:[Users]
    })
    return posts

}
module.exports={
    createNewPost,
    showAllposts
}

/*
async function test(){
    console.log(await createNewPost(2,"Test post","test post body"))
}

test()

async function test2(){
    const posts=await showAllposts()
    for(let p of posts){
        console.log(`Title:${p.title}\n Author:${p.user.username}\n Post:${p.body}`)
    }
}
test2()
*/
