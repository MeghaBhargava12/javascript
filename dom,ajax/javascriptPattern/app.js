// // module -basic structure
// (function () {
//   //declare private vars and functions
//   return {
//     //declare public vars and functions
//   }
// })();

// // standard module pattern
// const UICtrl = (function () {
//   let text = 'hello world';
//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }
//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// // revealing module pattern
// const ItemCtrl = (function () {
//   let data = [];
//   function add(item) {
//     data.push(item);
//     console.log('item added.....');
//   }
//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     })
//   }
//   return {
//     add: add,
//     get: get
//   }
// })();

// ItemCtrl.add({ id: 1, name: 'megha' });
// ItemCtrl.add({ id: 2, name: 'pedu' });
// console.log(ItemCtrl.get(1));

// // singleton
// const Singleton = (function () {
//   let instance;
//   function createInstance() {
//     const object = new Object({name:'megha'});
//     return object;
//   }
//   return {
//     getInstance: function () {
//       if (!instance) {
//         instance = createInstance();
//       }
//       return instance;
//     }
//   }
// })();

// const instanceA = Singleton.getInstance();
// const instanceB = Singleton.getInstance();
// console.log(instanceA);
// console.log(instanceB);
// console.log(instanceA===instanceB);

// // factory
// function MemberFactory() {
//   this.createMember = function (name, type) {
//     let member;
//     if (type === 'simple') {
//       member = new SimpleMembership(name);
//     } else if (type === 'standard') {
//       member = new StandardMembership(name);
//     } else if (type == 'super') {
//       member = new SuperMembership(name);
//     }
//     member.type = type;
//     member.define = function () {
//       console.log(`${this.name} (${this.type}): ${this.cost}`)
//     }
//     return member;
//   }
// }
// const SimpleMembership = function (name) {
//   this.name = name;
//   this.cost = '$5';
// }
// const StandardMembership = function (name) {
//   this.name = name;
//   this.cost = '$15';
// }
// const SuperMembership = function (name) {
//   this.name = name;
//   this.cost = '$25';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('john doe', 'simple'));
// members.push(factory.createMember('mini mehra', 'standard'));
// members.push(factory.createMember('kiya johnson', 'super'));
// console.log(members);

// members.forEach(function (member) {
//   member.define();
// })

// // Obserse pattern
// function EventObserver() {
//   this.observer = [];
// }

// EventObserver.prototype = {
//   subscribe: function (fn) {
//     this.observer.push(fn);
//     console.log(`you are now subcribe to ${fn.name}`);
//   },
//   unsubscribe: function (fn) {
//     this.observer = this.observer.filter(function (item) {
//       if (item !== fn) {
//         return item;
//       }
//     });
//     console.log(`you are now unsubscribed from ${fn.name}`);
//   },
//   fire: function () {
//     this.observer.forEach(function (item) {
//       item.call();
//     });
//   }
// }

// const click = new EventObserver();
// document.querySelector('.sub-ms').addEventListener('click', function () {
//   click.subscribe(getCurMilliseconds);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function () {
//   click.unsubscribe(getCurMilliseconds);
// });
// document.querySelector('.sub-s').addEventListener('click', function () {
//   click.subscribe(getCurSeconds);
// });
// document.querySelector('.unsub-s').addEventListener('click', function () {
//   click.unsubscribe(getCurSeconds);
// });
// document.querySelector('.fire').addEventListener('click', function () {
//   click.fire();
// });

// const getCurMilliseconds = function () {
//   console.log(`Current Millisecond: ${new Date().getMilliseconds()}`);
// }
// const getCurSeconds = function () {
//   console.log(`Current Second: ${new Date().getSeconds()}`);
// }

// // mediator pattern
// const User = function (name) {
//   this.name=name;
//   this.chatroom = null;
// }

// User.prototype = {
//   send: function (message,to) {
//     this.chatroom.send(message, this, to);
//   },
//   recieve: function (message,from) {
//     console.log(`${from.name} to ${this.name}: ${message}`);
//   }
// }

// const Chatroom = function () {
//   let users = {};

//   return {
//     register: function (user) {
//       users[user.name] = user;
//       user.chatroom = this;
//     },
//     send: function (message,from,to) {
//       if (to) {
//         to.recieve(message, from);
//       } else {
//         for (key in users) {
//           if (users[key] !== from) {
//             users[key].recieve(message, from);
//           }
//         }
//       }
//     }
//   }
// }

// const brad = new User('brad');
// const jeff = new User('jeff');
// const sara = new User('sara');

// const chatroom = new Chatroom();
// chatroom.register(brad);
// chatroom.register(jeff);
// chatroom.register(sara);

// brad.send('hello jeff', jeff);
// sara.send('hello brad', brad);
// jeff.send('hello all');

//state pattern