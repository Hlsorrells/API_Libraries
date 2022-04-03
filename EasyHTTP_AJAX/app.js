const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})

// Get Single Post retrieves single user from id param
http.get(`https://jsonplaceholder.typicode.com/posts/:${id}`, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});
