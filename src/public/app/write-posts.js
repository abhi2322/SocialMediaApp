$('#formid').submit((event)=>{
let t=$('#title').val()
let b=$('#body').val()
let user=window.currentUser.id
$.post("api/posts",{userId:user,title:t,body:b},function(data){
})
})