// https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-08/methods
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-07/ru.md
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-08/ru.md

import { cars } from './cars.js';

// function fn1(callback) {
//   console.log('Hello');

//   if (callback) {
//     callback();
//   }
// }

// fn1(() => console.log('world'));

// ------ this ------
// const bobby = {
//   name: 'Bobby',
// };

// const peter = {
//   name: 'Peter',
// };

// function sayHello() {
//   const innerFn = () => {
//     console.log(`Hello, my name is ${this.name}`);
//   };

//   innerFn();
// }

// sayHello.call(bobby);
// sayHello.call(peter);

// ------ callback -------
// const numbers = [1, 2, 3, 4, 5];

// const map = (items, callback) => {
//   const res = [];

//   items.forEach((item) => res.push(callback(item)));

//   return res;
// };

// console.log(map(numbers, (item) => item * 2)); // x2 -> [2, 4, 6, 8, 10]
// console.log(map(numbers, (item) => item * 3)); // x3 -> [3, 6, 9, 12, 15]
// console.log(map(numbers, (item) => item + 10)); // number[]
// console.log(map(numbers, (item) => item.toString())); // string[]

// console.log(
//   map(
//     ['Google', 'Facebook', 'Amazon'],
//     (item) => `<a href="${item}">${item}</a>`
//   )
// );

// console.log(numbers.map((item) => item * 2)); // x2 -> [2, 4, 6, 8, 10]

// console.table(cars); // cars[]
// console.log(cars.map((car) => car.model)); // string[]
// console.log(
//   cars.map((car) => ({
//     model: car.model,
//     price: car.price,
//   }))
// ); // { model: string, price: number }[]

// ---- filter -----
// console.log(cars);
// console.log(
//   cars.filter((car) => {
//     return car.make === 'Honda';
//   })
// );
// console.log(cars.filter((car) => car.type === 'suv'));
// console.log(
//   cars.filter(
//     (car) => car.price > 23000 && car.price < 25000 && car.type === 'suv'
//   )
// );

//                                   undefined.broken
// console.log(cars.filter((car) => car.innerObj?.broken)); // true === true

// ---- find -----
// console.log(cars);
// console.log(cars.find((car) => car.model === 'Sequoia'));
// console.log(cars.find((car) => car.innerObj?.broken));

// if (cars.find((car) => car.innerObj?.sdgdsgs === 15)) {
//   console.log('Hurray');
// } else {
//   console.log(':(');
// }

// ---- findIndex ----
// const numbers = [1, 2, 3];
// console.log(numbers.indexOf({ dkfghjs }));

// console.log(cars);
// console.log(cars.findIndex((car) => car.model === 'Sequoia'));
// console.log(cars.findIndex((car) => car.innerObj?.broken));

// if (cars.findIndex((car) => car.innerObj?.sdgdsgs === 15) > 0) {
//   console.log('Hurray');
// } else {
//   console.log(':(');
// }

// ---- every | some ----
// console.log(cars);
// console.log(cars.every((car) => car.type === 'suv')); // false
// console.log(cars.some((car) => car.type === 'suv')); // some

// ----- reduce -----
// --- sum ---
// function sum(items) {
//   let acc = 0;

//   items.forEach((item) => (acc += item));

//   return acc;
// }

// console.log(sum([1, 1, 1])); // 3
// console.log(sum([1, 2, 3])); // 6

// console.log(
//   [1, 2, 3].reduce((acc, item) => {
//     return (acc += item);
//   }, 0) // () => number
// );

// --- min ---
// function min(items) {
//   let acc = items[0];

//   items.forEach((item) => {
//     if (item < acc) {
//       acc = item;
//     }
//   });

//   return acc;
// }

// console.log(min([1, 1, -1, 1])); // -1
// console.log(min([1, 2, 0, 3])); // 0

// console.log(
//   [1, 2, 0, 3].reduce((acc, item) => {
//     return item < acc ? item : acc;
//   })
// );

// // --- max ---
// function max(items) {
//   let acc = items[0];

//   items.forEach((item) => {
//     if (item > acc) {
//       acc = item;
//     }
//   });

//   return acc;
// }

// console.log(max([1, 1, -1, 1])); // 1
// console.log(max([1, 2, 0, 3])); // 3

// console.log(
//   [1, 2, 0, 3].reduce((acc, item) => {
//     return item > acc ? item : acc;
//   })
// );

// ---- reduce objects ----
// console.log(cars);
// console.log(cars.reduce((acc, item) => acc + item.amount, 0));

// console.log(cars.map((car) => car.model));
// console.log(cars.reduce((acc, car) => [...acc, car.model], []));

// ---- sort ----
// const numbers = [4, 15, 2, 20, 21, 3, 10, 5, 1, 7, 0];
// const sortedNumbers = [...numbers].sort((a, b) => {
//   // a < b ->    <0
//   // a > b ->    >0
//   // a = 0 ->     0

//   if (a < b) return -1; // a - b = 4 - 15 = -9
//   if (a > b) return 1; //  a - b = 15 - 2 = 13

//   return 0; // a - b = 1 -1 = 0
// });

// sortedNumbers.sort((a, b) => b - a);

// console.log(numbers);
// console.log(sortedNumbers);

// const text = 'hello world';
// const reversedText = text.split('').reverse().join('');

// console.log(text);
// console.log(reversedText);

// ---- delete item from array ----
// let cart = [...cars];

// cart = cart.filter((item) => item.model !== 'Explorer');

// console.log(cart);

// ---- update item in array ----
// let cart = [...cars];

// // cart = cart.map((item) => ({ ...item, color: 'white', amount: 0 }));
// cart = cart.map((item) =>
//   item.model === 'CR-V'
//     ? {
//         ...item,
//         amount: item.amount - 1,
//       }
//     : item
// );

// console.log(cart);

// const obj = {
//   name: 'Bobby',
//   age: 15,
//   innerObj: {}
// };

// const obj1 = { name: 'Peter', ...obj, age: 16 }; // {name: 'Bobby', age: 16}

// console.log(obj);
// console.log(obj1);

// const arrOfArrs = [
//   ['математика', 'фізика'],
//   ['інформатика', 'математика'],
//   ['фізика', 'біологія'],
// ];

// console.log(...arrOfArrs.flat());

// ---- find | filter ----
// if (obj?.key?.innerKey?.innerInnerKey?.lastKey === 'sdfgsdg') {}

const obj1 = [
  {
    name: 'Bobby',
    age: 15,
  },
  {
    name: 'Peter',
    age: 20,
  },
];

const obj2 = [
  {
    name: 'Bobby',
    age: 15,
  },
  {
    name: 'Peter',
    age: 20,
  },
];

console.log(_.isEqual(obj1, obj2));

// https://lodash.com/docs/4.17.15#isEqual
// console.log(Object.entries(obj1));
// console.log(Object.entries(obj2));
