const http = new EasyHTTP;
const url = 'https://jsonplaceholder.typicode.com';

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Get Users
http.get(`${url}/users`)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// Create User
http.post(`${url}/users`, data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
