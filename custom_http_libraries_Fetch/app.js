const http = new EasyHttp;

// GET User

// const users = http.get('https://jsonplaceholder.typicode.com/users');

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// console.log(users);


const data = {
    name: 'Akash Kumar',
    username: 'akash123',
    email: 'akash@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .cathc(err => console.log(err));

// update post
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .cathc(err => console.log(err));

// delete post
http.delete('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.cathc(err => console.log(err));


