
$(()=>{
    $('#navbar').load('components/navbar.html',loginIfNeeded)
    $('#footer').load('components/footer.html')
    $('#main').load('components/all-posts.html')
})

function loginIfNeeded(){
  window.currentUser=window.localStorage.user?JSON.parse(window.localStorage.user):null
  if(!currentUser){
    $.post('/api/user',{},(user)=>{
      if(user){
        window.localStorage.user=JSON.stringify(user)
        $('#nav-username').text(user.username)
        currentUser=user
      }
    })
  }
  $('#nav-username').text(currentUser.username)
}






//Use this if image is not loading
/*
$('.imageSelector').load(function(){
  //Do Something...
}).each(function(){
  if(this.complete) {
    $(this).trigger('load');
  }
});
*/