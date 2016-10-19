// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('Errororo');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('Promise success', temp);
// }, function (err) {
//   console.log('Promise error', err);
// });

// Lhel

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('NaN');
    }
  });
}

addPromise(1,2).then(function (number) {
  console.log(number);
}, function (err) {
  console.log(err);
});

addPromise(1,'lhel').then(function (number) {
  console.log(number);
}, function (err) {
  console.log(err);
});
