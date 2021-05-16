const express=require('express')


const {db}=require('./db/models')
const app=express()

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


