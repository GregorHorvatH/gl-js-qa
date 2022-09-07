// https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-18/promises
// https://github.com/goitacademy/javascript-homework/blob/main/homework-11/promisification/README.md

// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm4oKSB7CiAgY29uc29sZS5sb2coIkhlbGxvIGZyb20gZnVuY3Rpb24gMSEiKTsKICBjb25zb2xlLmxvZygiSGVsbG8gZnJvbSBmdW5jdGlvbiAyISIpOwogIGNvbnNvbGUubG9nKCJIZWxsbyBmcm9tIGZ1bmN0aW9uIDMhIik7Cn0KCmNvbnNvbGUubG9nKCJzdGFydCIpOwpmbigpOwpjb25zb2xlLmxvZygiZW5kIik7Cg%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

// function fn() {
//   console.log('Hello from function');
// }

// console.log('start');

// fetch('https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/cart')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     console.log('end');
//   });

// const promiseTimeout = (callback, delay) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       callback();

//       resolve({
//         param1: 'sdgfsdg',
//         param2: true,
//       });

//       // reject('error happened');
//     }, delay);
//   });

// promiseTimeout(fn, 1000)
//   .then((data) => {
//     console.log('end', data);

//     return ['xdfgdgf', 'ertt'];
//   })
//   .then((data) => console.log('step 2', data))
//   .then(() => console.log('step 3'))
//   .then(() => console.log('step 4'))
//   .catch((error) => console.log(error))
//   .finally(() => {
//     console.log('final');
//   });

// ----- mock -----
// const mockedFecth = () => {
//   return Promise.resolve(['xdfgdgf', 'ertt']);
// };

// const sum = (a, b) => {
//   return Promise.resolve(a + b);
// };

// console.log('start');

// setTimeout(() => {
//   console.log('timeout');
// }, 0);

// sum(1, 1).then((data) => {
//   console.log(data);
//   console.log('end');
// });

// mockedFecth()
//   .then((data) => console.log(data))
//   .then(() => {
//     console.log('end');
//   })
//   .catch((error) => console.log('error:', error));

// ---- Promise.all ----
const fn1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('fn 1');
    }, 1500);
  });

const fn2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fn 2');
      // reject('error happened');
    }, 1000);
  });

const fn3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('fn 3');
    }, 2000);
  });

fn1()
  .then(console.log)
  .then(() => {
    fn2()
      .then(console.log)
      .then(() => {
        fn3()
          .then(console.log)
          .then(() => {
            console.log('end');
          });
      });
  });

Promise.all([fn1(), fn2(), fn3()])
  .then(console.log)
  .then(() => {
    console.log('end');
  })
  .catch(console.log);

// Promise.allSettled([fn1(), fn2(), fn3()])
//   .then((resp) => {
//     resp.forEach((obj) => {
//       const { status, value, reason } = obj;

//       if (status === 'fulfilled') {
//         console.log('response:', value, reason);
//       } else {
//         console.log('error:', reason);
//       }
//     });
//   })
//   .then(() => {
//     console.log('end');
//   })
//   .catch(console.log);

// ---- async/await ----
// const fn1 = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('fn 1');
//     }, 50);
//   });
// };

// const fn2 = (x) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${x}, fn 2`);
//       // reject('error happened');
//     }, 100);
//   });

// const fn3 = (x) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`${x}, fn 3`);
//     }, 75);
//   });

// const fn4 = () => {
//   return fn1().then((res1) => {
//     return fn2(res1).then((res2) => {
//       return fn3(res2); // -> Promise
//     });
//   });
// };

// // const fn4 = async () => {
// //   const res1 = await fn1();
// //   const res2 = await fn2(res1);

// //   return fn3(res2);
// // };

// const promiseRunner = async () => {
//   try {
//     // const res1 = await fn1(); // fn 1
//     // const res2 = await fn2(res1);
//     // const res3 = await fn3(res2);
//     const res4 = await fn4();

//     console.log(res4);
//   } catch (error) {
//     console.log('error:', error);
//   }
// };

// console.log('start');
// promiseRunner().then(() => {});
// console.log('end');

// ---- async/await - fetch ----
// const fn = async () => {
//   const res = await fetch(
//     'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/cart'
//   );
//   // .then((res) => res.json())
//   // .then((data) => data.map((item) => item.name));

//   const pureData = await res.json();
//   const data = pureData.map((item) => item.name);

//   console.log(data);
// };

// fn();
