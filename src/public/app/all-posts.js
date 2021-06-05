function loadAllPosts(){
    $.get('/api/posts',(posts)=>{
      for(let p of posts){
        $('#post-container').append(
          $(`
        <div class="col-4 id="card">
          <div class="card m-2" style="width: 15rem;">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
              <p class="card-text">${p.body.substr(0,10)}...</p>
              <a href="#" class="card-link">Read More</a>
              <a href="#" class="card-link">Like</a>
            </div>
          </div>
        </div>`)
        )
      }
    })
}