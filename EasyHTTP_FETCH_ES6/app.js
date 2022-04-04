const http = new EasyHTTP;
const url = 'https://jsonplaceholder.typicode.com';

// Get Users
http.get(`${url}/users`)
    .then(data => console.log(data))
    .catch(err => console.log(err));
