// //es6 class for obser pattern
// class EventObserver{
//   constructor(){
//     this.observer = [];
//   }

//   subscribe(fn) {
//     this.observer.push(fn);
//     console.log(`you are now subcribe to ${fn.name}`);
//   }

//   unsubscribe(fn) {
//     this.observer = this.observer.filter(function (item) {
//       if (item !== fn) {
//         return item;
//       }
//     });
//     console.log(`you are now unsubscribed from ${fn.name}`);
//   }

//   fire() {
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