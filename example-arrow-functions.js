var names = ['Andy', 'Kush', 'Mumuh'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Wut'));

// var person = {
//   name: 'Andy',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add(a, b) {
  return a + b;
}

var returnAdd = (a, b) => console.log(a + b);
var returnAdd2 = (a, b) => {
  console.log(a+b);
}
returnAdd(1,3);
returnAdd2(9,0);
// console.log(add(1,3));
// console.log(add(9,0));
