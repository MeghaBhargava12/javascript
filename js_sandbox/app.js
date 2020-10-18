// // alert('hello');
// /*....multi line..............*/
// // log to console
// console.log('hello world');
// console.log(123);
// console.log(true);
// var greeting = 'hello';
// console.log(greeting);
// console.log([1, 2, 3, 4]);
// console.log({ a: 1, b: 2, c: 3 });
// console.table({ a: 1, b: 2, c: 3 });
// console.error('this is some error');
// console.warn('this is warning');
// //time to loop
// console.time('hello');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.timeEnd('hello');
// // console.clear();

// //variables (var,let.const)
// var name = 'megha';
// console.log(name);
// name = 'prerana';
// console.log(name);

// //init var
// var greet;
// console.log(greet);
// greet = 'hello';
// console.log(greet);

// //letter number _ $

// //multi word
// var firstName = 'megha'; //camel case
// var first_name = 'pedu'; //underscore
// var FirstName = 'tom'; //Pascal case
// var firstname = 'jimmy'; //not recommended

// //let
// let n;
// n = 'megha1';
// console.log(n);
// n = 'prerana1';
// console.log(n);

// //const
// const m = 'megha2';
// console.log(m);
// //can not resign
// //have to assign a value
// //const a;

// const person = {
//   name: 'sara',
//   age: 30,
// };
// console.log(person);
// person.name = 'john';
// console.log(person);

// const num = [1, 2, 3, 4, 5];
// num.push(6);
// console.log(num);

// //primitive data type
// //string
// const str = 'megha bhargava';
// //number
// const age = 45;
// //boolean
// const bool = true;
// //null
// const car = null;
// //undefined
// let test;
// //symbol
// const sym = Symbol();

// console.log(typeof name);

// //reference
// //array
// const hobbies = ['movie', 'music'];
// //object literals
// const loc = {
//   city: 'bangalore',
//   state: 'karnataka',
// };
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// console.clear();

// //type converstion
// let val;
// // number to string
// val = String(5);
// val = String(4 + 4);
// //bool to string
// val = String(true);
// //date to string
// val = String(new Date());
// //array to string
// val = String([1, 2, 3]);
// // toString()
// val = (5).toString();
// val = true.toString();
// //work on string
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// //string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello'); //NaN not a number
// val = Number([1, 2, 3]); //NaN

// //parse int
// val = parseInt('100.30');
// val = parseFloat('100.30');
// //output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());

// const val1 = '5';
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum); //56
// console.log(typeof sum); //string

// //numbers and math objects
// const num1 = 100;
// const num2 = 50;
// let val3;

// //simpe math with numbers
// val3 = num1 + num2;
// val3 = num1 - num2;
// val3 = num1 * num2;
// val3 = num1 / num2;
// val3 = num1 % num2;

// val3 = Math.PI;
// val3 = Math.E;
// val3 = Math.round(2.4);
// val3 = Math.ceil(2.4);
// val3 = Math.floor(2.4);
// val3 = Math.sqrt(64);
// val3 = Math.abs(-3);
// val3 = Math.pow(8, 2);
// val3 = Math.min(2, 22, 4, 1, 6, 7, 99);
// val3 = Math.max(2, 22, 4, 1, 6, 7, 99);
// val3 = Math.random();
// val3 = Math.random() * 20; //random no between 1 to 19
// val3 = Math.floor(Math.random() * 20 + 1); //random no between 1 to 20

// const nameFirst = 'megha';
// const nameLast = 'bhargava';
// const str1 = 'hello there my name is megha';
// const str2 = 'hello , there my , name is megha';
// let val;
// val = nameFirst + nameLast;
// val = nameFirst + ' ' + nameLast;
// val = 'meghu';
// val += 'bhargav';
// val = 'hello my name is ' + nameFirst;
// val = "that's awesome , i cant't wait";
// val = nameFirst.length;
// val = nameFirst.concat('', nameLast);
// val = nameFirst.toUpperCase();
// val = nameFirst.toLowerCase();
// val = nameFirst[2];
// val = nameFirst.indexOf('l');
// val = nameFirst.lastIndexOf('l');
// val = nameFirst.charAt('2');
// val = nameFirst.charAt(firstName.length - 1);
// val = nameFirst.substring(0, 2);
// val = nameFirst.slice(0, 2);
// val = nameFirst.slice(-3);
// val = str2.split(',');
// val = str1.replace('megha', 'prerana');
// val = str1.includes('hello');

// //template literal
// var html;
// html = '<ul><li> first name: ' + nameFirst + '</li><li> lastname</li></ul>';
// html =
//   '<ul>' +
//   '<li> first name: ' +
//   nameFirst +
//   '</li>' +
//   '<li> lastname</li>' +
//   '</ul>';
// html =
//   '<ul><li> first name:  ${nameFirst}</li><li> ${lastname}</li><li>${2+4}</li></ul>';
// document.body.innerHTML = html;

// //array
// const number1 = [43, 56, 73, 23, 44];
// const number2 = new Array(43, 56, 73, 23, 44);
// const fruit = ['apple', 'banana', 'orange'];
// const mix = [
//   22,
//   'hello',
//   true,
//   undefinednull,
//   { a: 1, b: 2, c: 3 },
//   new Date(),
// ];

// val = number1.length;
// val = Array.isArray(number1);
// val = number1[3];
// val = number1[0];
// number1[2] = 100;
// val = number1.indexOf(36);
// number1.push(250);
// number1.unshift(120);
// number1.pop();
// number1.shift();
// number1.splice(1, 3);
// number1.reverse();
// function under50(num) {
//   return num < 50;
// }
// val = number1.find(under50);
// val = number1.concat(number2);
// val = fruit.sort();
// val = number1.sort();
// val = number1.sort(function (x, y) {
//   return x - y;
// });
// val = number1.sort(function (x, y) {
//   return y - x;
// });

// console.log(number1);
// console.log(val);

// //object literals
// const person1 = {
//   firstName: 'megha',
//   lastName: 'bhargava',
//   age: 22,
//   email: 'megha@gmail.com',
//   hobbies: ['music', 'sport'],
//   address: { city: 'blore', state: 'karnataka' },
//   getBirthYear: function () {
//     return 1987;
//   },
// };
// val = person1;
// val = person1.firstName;
// val = person1['firstName'];
// val = person1.age;
// val = person1.hobbies[1];
// val = person1.address.state;
// val = person1.address['city'];
// val = person1.getBirthYear();

// console.log(val);

// const people = [
//   { name: 'john', age: 30 },
//   { name: 'pedu', age: 20 },
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// //date and time
// const today = new Date();
// val = today;
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// let birthday = new Date('12-11-1998 16:06:00');
// birthday = new Date('September 10 1998');
// birthday = new Date('12/11/1998');
// val = birthday;
// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1912);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(20);
// console.log(val);

// // window object
// // alert
// alert('hello world');

// //prompt
// const input = prompt();
// alert(input);

// // confirm
// if (confirm('are you sure')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

let val;
//outer height and width
val = window.outerHeight;
val = window.outerWidth;
//inner height and width
val = window.innerHeight;
val = window.innerWidth;
//scroll point
val = window.scrollY;
val = window.scrollX;
//location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search; //query string
// //redirect
// window.location.href = 'http://google.com';
// //reload
// window.location.reload();
// //history object
// window.history.go(-1);//-1 previous site -2 site previous to previous site 
// val=window.history.length;
//navigator object
val=window.navigator;
val=window.navigator.appName;
val=window.navigator.appVersion;
val=window.navigator.userAgent;
val=window.navigator.platform;
val=window.navigator.vendor;
val=window.navigator.language;

console.log(val);
