// async function myFunc() {
//   // return 'hello';
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('HELLO'), 1000);
//   });
//   const error = true;
//   if (!error) {
//     const res = await promise;
//   } else {
//     await Promise.reject(new Error('something went wrong'));
//   }
//   return res;
// }

// myFunc().then((res) => console.log(res));

async function getUsers() {
  //await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //only proceed once its resolved
  const data = await response.json();
  //only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
