'use strict';

// https://goit.global/textbooks/javascript-yk5evp/v2/uk/docs/lesson-05/objects
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-03/ru.md
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-05/ru.md
// https://github.com/goitacademy/js-instructor-examples/blob/main/lesson-09/ru.md

// -------- array --------
// const numbers = [
//   1,
//   2,
//   3,
//   'Bobby',
//   true,
//   undefined,
//   null,
//   {},
//   { name: 'Bobby', age: 15 },
// ];

// const numbersCopy = numbers;

// const numbersCopy = [...numbers]; // 1,2,3 ...
// numbersCopy[0] = 'Peter';

// console.log(numbers);
// console.log(numbersCopy);

// const nums = [2, 5, 3, 1, 4];
// console.log(Math.min(...nums));
// console.log(Math.max(...nums));

// const nonUniqueValues = [1, 1, 1, 1, 2, 2, 3, 3, 4]; // [1,2,3,4]
// const uniqueValues = new Set(nonUniqueValues);

// uniqueValues.add(1);
// uniqueValues.add(1);
// uniqueValues.add(1);
// uniqueValues.add(1);
// uniqueValues.add(1);
// uniqueValues.add(5);

// console.log([...uniqueValues]);

// -------- string to array --------
// const text = 'hello world';
// const words = text.split(' ');
// const letters = text.split('');

// console.log(words);
// console.log(letters);
// console.log(text[6]);

// const reversedText = text.split('').reverse().join('');
// console.log(reversedText);

// ------ includes, indexOf -------
// const arr = [1, 2, 3, 'Bobby', { name: 'Peter' }];

// console.log(arr.includes(3)); // true
// console.log(arr.includes('Bobby')); // true
// console.log(arr.includes(346)); // false
// console.log(arr.includes({ name: 'Peter' })); // false

// console.log(arr.indexOf('Bobby')); // 3
// console.log(arr.indexOf('Peter')); // -1

// -------- object --------
// const obj = {
//   name: 'Bobby',
//   age: 15,
// };
// obj.name = 'Peter';
// obj.sdfgs = '234154';

// const key = 'age';
// console.log(obj.name);

// obj['age'] = 16;
// console.log(obj['age']);

// obj[key] = 17;
// console.log(obj[key]);

// const newKey = 'eyes';
// obj[newKey] = 'blue';

// console.log(obj);
// console.log(obj.lkhklj);

// console.log('lkhklj' in obj);
// console.log('eyes' in obj);

// const user = undefined;
// console.log(user.name);

// ------ obj in obj ------
// const obj1 = {
//   name: 'Bobby',
//   2: 345345,
// };

// const obj2 = {
//   age: 15,
// };

// const obj3 = {
//   age: 20,
// };

// obj1[obj2] = obj2; // [object Object]
// obj1[obj3] = obj3; // [object Object]

// console.log(obj1); // { name: 'Bobby', obj2: { age: 15 }, obj3: { age: 20 } }

// ------ object copy ------
// const obj1 = {
//   name: 'Bobby',
//   2: 345345,
// };

// // const obj2 = obj1; // bad
// const obj2 = { ...obj1 }; // good
// obj2[2] = 'Hello';

// console.log(obj1);
// console.log(obj2);

// ------- Object.values ---------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const values = Object.values(salaries);
// let sum = 0;

// values.forEach((value) => {
//   sum += value;
// });

// console.log(sum);

// ------- Object.keys ---------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const keys = Object.keys(salaries);
// let sum = 0;

// keys.forEach((key) => {
//   sum += salaries[key];
// });

// console.log(sum);

// ------- Object.entries ---------
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const keyValues = Object.entries(salaries);

// const fn = ([key, value]) => {
//   // const [key, value] = item;

//   // const key = item[0];
//   // const value = item[1];

//   console.log(key, value);
// };

// keyValues.forEach(([key, value]) => console.log(key, value));

// console.log(keyValues);

// ----- functions in objects ------
// const obj = {
//   name: 'Bobby',
//   age: 15,

//   sayHello(x, y) {
//     console.log(`Hello my name is ${this.name}, I'm ${this.age} years old`);
//     console.log('x:', x);
//     console.log('y:', y);
//     // console.log(this);
//   },

//   hello() {
//     this.sayHello(3, 3);
//   },
// };

// obj.hello();

// obj.sayHello(); // this === obj

// --- loose context ---
// setTimeout(obj.sayHello, 2000);

// const sayHelloCopy = obj.sayHello;
// sayHelloCopy(); // this === undefined / window

// function fn(callback) {
//   callback();
// }

// fn(() => console.log('Hello'));
// fn(obj.sayHello);

// --- save context ---
// const sayHelloCopy = obj.sayHello;
// sayHelloCopy.call(obj, 5, 6);
// sayHelloCopy.apply(obj, [5, 6]);
// setTimeout(sayHelloCopy.bind(obj, 5, 6), 2000);

// const sayHelloCopy2 = obj.sayHello.bind(obj);
// sayHelloCopy2(5, 6);

// ------ class -------
// function Human(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const bobby = new Human('Bobby', 15);
// console.log(bobby);

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}, I'm ${this.age} years old`);
//   }
// }

// const bobby = new Human('Bobby', 15);

// console.log(bobby);
// bobby.sayHello();

// class Doctor extends Human {
//   constructor(name, age, profession) {
//     super(name, age);

//     this.profession = profession;
//   }

//   sayHello() {
//     console.log(`Hello my name is ${this.name}, I'm a doctor.`);
//   }
// }

// const house = new Doctor('House', 60, 'theraphy');

// house.sayHello = () => console.log('Bye');

// console.log(house);
// house.sayHello();
// house.__proto__.__proto__.sayHello();
