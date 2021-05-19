const express=require('express')
const {db}=require('./db/models')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {userRoute}=require("./routes/users")
const {postRoute}=require("./routes/posts")
app.use("/api/user",userRoute)
app.use("/api/posts",postRoute)
app.use('/',express.static(__dirname+'/public'))


db.sync()
.then(()=>{
    app.listen(3456,()=>{
        console.log('server started at http://localhost:3456')
    })
})
.catch((err)=>{
    console.error(new Error('Could not start database'))
    console.error(err)
})


