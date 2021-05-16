const {Sequelize, DataTypes, DATE}=require('sequelize')
const db =new Sequelize({
    database:"socialmediadb",
    username:"socialuser",
    password:"socialpass",
    dialect:"mysql"
})
const COL_ID_DEF={
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
    
}

const Users=db.define('user',{
    id:COL_ID_DEF,
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
        
    }
})

const Posts= db.define('post',{
    id:COL_ID_DEF,
    title:{
        type:DataTypes.STRING(140),
        allowNull:false
    },
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    }
})

const Comments=db.define('commnet',{
    id:COL_ID_DEF,
    title:{
        type:DataTypes.STRING(140),
        allowNull:false
    },
    body:{
        type:DataTypes.TEXT('tiny'),
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)
Users.hasMany(Comments)
Comments.belongsTo(Users)
Posts.hasMany(Comments)
Comments.belongsTo(Posts)


module.exports={
    db,Users,Posts,Comments
}
