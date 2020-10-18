// document.getElementById('button1').addEventListener('click', loadCustomer);

// document.getElementById('button2').addEventListener('click', loadCustomers);

// // Load Single Customer
// function loadCustomer(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customer.json', true);

//   xhr.onload = function(){
//     if(this.status === 200) {
//       // console.log(this.responseText);

//       const customer = JSON.parse(this.responseText);

//       const output = `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;

//       document.getElementById('customer').innerHTML = output;
//     }
//   }

//   xhr.send();
// }

// // Load Customers
// function loadCustomers(e) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'customers.json', true);

//   xhr.onload = function(){
//     if(this.status === 200) {
//       // console.log(this.responseText);

//       const customers = JSON.parse(this.responseText);

//       let output = '';

//       customers.forEach(function(customer){
//         output += `
//         <ul>
//           <li>ID: ${customer.id}</li>
//           <li>Name: ${customer.name}</li>
//           <li>Company: ${customer.company}</li>
//           <li>Phone: ${customer.phone}</li>
//         </ul>
//       `;
//       });

//       document.getElementById('customers').innerHTML = output;
//     }
//   }

//   xhr.send();
// }

// --------------------------------------------------------------------

// //chuck Norries Jokes

// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, 'true');

//   xhr.onload = function () {
//     if (this.status === 200) {
//       const response = JSON.parse(this.responseText);
//       let output = '';
//       if (response.type === 'success') {
//         response.value.forEach(function (joke) {
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>SOmething wet wrong</li>';
//       }
//       document.querySelector('.jokes').innerHTML = output;
//     }
//   };

//   xhr.send();

//   e.preventDefault();
// }

// --------------------------------------------------------------------

//call back function

// const posts = [
//   { title: 'post one', body: 'this is post one' },
//   { title: 'post two', body: 'this is post two' },
// ];
// //Syncronus
// function createPost() {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'post three', body: 'this is post three' });

// getPost();

// // asyncronous
// function createPost(post, callback) {
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPost() {
//   setTimeout(function () {
//     let output = '';
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: 'post three', body: 'this is post three' }, getPost);

// --------------------------------------------------------------------

const posts = [
  { title: 'post one', body: 'this is post one' },
  { title: 'post two', body: 'this is post two' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      let error = true;
      if (!error) {
        resolve();
      } else {
        reject('error: something went wrong');
      }
    }, 2000);
  });
}

function getPost() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: 'post three', body: 'this is post three' })
  .then(getPost)
  .catch(function (msg) {
    console.log(msg);
  });
