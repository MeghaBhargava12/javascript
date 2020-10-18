// //iterator
// function nameIterator(names) {
//   let nextIndex = 0
//   return {
//     next: function () {
//       return nextIndex<names.length?{value:names[nextIndex++],done:false}:{done:true}
//     }
//   }
// }

// const namesArr = ['jack', 'jill', 'john'];
// const names = nameIterator(namesArr);
// console.log(names.next().vaue);
// console.log(names.next().vaue);
// console.log(names.next().vaue);
// console.log(names.next());

// //generator
// function* sayNames() {
//   yield 'jack';
//   yield 'jill';
//   yield 'john';
// }

// const name = sayNames();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);//undefined

// //id creator
// function* createIds() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// //symbols
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym2);
// console.log(Symbol()===Symbol());
// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

// const key1 = Symbol();
// const key2 = Symbol('sym2');

// const myObj = {};

// myObj[key1] = 'prop1';
// myObj[key2] = 'prop2';
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop4';

// console.log(myObj[key1]);
// console.log(myObj[key2]);

// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);//display only key3 and key4 as property and not symbol
// }

// console.log(JSON.stringify({key:'prop'}));
// console.log(JSON.stringify({[Symbol(sym1)]:'prop'}));

// //destructuring
// let a, b;
// [a, b] = [100, 200];
// console.log(a);
// //rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];

// ({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// ({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
// console.log(a, b);

// //array destructuring
// const people = ['john', 'beth', 'mike'];
// const [person1, person2, person3] = people;
// console.log(person1,person2,person3);

// //pares array return from function
// function getPeople() {
//   return ['john', 'beth', 'mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// //object destructuring
// const person = {
//   name: 'john doe',
//   age: 32,
//   city: 'miami',
//   gender:'male'
// }

// //old es5
// const name = person.name,
//   age = person.age,
//   city = person.city;

// // new es6 destructuring
// const { name, age, city } = person;

// //maps es6
// //maps=key-value pair
// const map1 = new Map();
// const key1 = 'some string', key2 = {}, key3 = function () { };
// map1.set(key1, 'value of key1');
// map1.set(key2, 'value of key2');
// map1.set(key, 'value of key3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// console.log(map1.size);

// for (let [key,value] of map1){
//   console.log(`${key}=${value}`);
// }
// for (let key of map1.keys()){
//   console.log(key);
// }
// for (let value of map1.values()){
//   console.log(value);
// }
// map1.forEach(function (value, key) {
//   console.log(`${key}=${value}`);
// })

// const keyValArr = Array.from(map1);
// console.log(keyValArr);
// const valArr = Array.from(map1.values());
// console.log(valArr);
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);

//sets store unique values of a type
const set1 = new Set();
set1.add(100);
set1.add('a string');
set1.add({ name: 'megha' });
set1.add(true);
set1.add(100);//doesnt get added

// const set2 = new Set([1, true, 'string']);

// console.log(set1);
// console.log(set2);
// console.log(set1.size);
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({ name: 'john' }));//false
// console.log({ name: 'john' } === { name: 'john' });//false
// set1.delete(100);
// console.log(set1);

for (let item of set1) {
  console.log(item);
}
set1.forEach((value) => {
  console.log(value);
})

const setArr = Array.from(set1);
console.log(setArr);