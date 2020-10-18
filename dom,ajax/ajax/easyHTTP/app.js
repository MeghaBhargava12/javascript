const http = new easyHTTP();

// //GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// //GET single psot
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//create data
const data = {
  title: 'custom post',
  body: 'this is a custom post',
};

// //Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// //update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (
//   err,
//   posts
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

//delete
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
