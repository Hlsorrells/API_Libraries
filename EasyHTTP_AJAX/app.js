const http = new easyHTTP;
const url = 'https://jsonplaceholder.typicode.com'
const id = 1

// Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Get Posts
http.get(`${url}/posts`, function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
})

// Get Single Post retrieves single user from id param
http.get(`${url}/posts/${id}`, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// Create Post
http.post(`${url}/posts`, data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// Update Post
http.put(`${url}/posts/${id}`, data, function (err, post) {
    if (err) {
        console.log(err);
    } else {
        console.log(post);
    }
});

// Delete Post
http.delete(`${url}/posts/${id}`, function (err, response) {
    if (err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
