const ADJECTIVES=[
    'flimsy','clammy','incredible','mellow','teeny','flawless','obsolete','lean',
    'magical','venomous','quarrelsome','deafening','animated','statuesque','magenta'
    ,'superficial','impartial'
]

const OBJECTS=[
    'rabbit','novel','purse','tiger','hammer','apple','monitor',
]

function genRandomUsername(){
    let index1=Math.floor(Math.random()*ADJECTIVES.length)
    let index2=Math.floor(Math.random()*OBJECTS.length)
    return `${ADJECTIVES[index1]}-${OBJECTS[index2]}`
}

module.exports={
    genRandomUsername
}