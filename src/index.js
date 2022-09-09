// https://opensource.zalando.com/restful-api-guidelines/#http-status-codes-and-errors

console.log('hello');

const todo = {
  text: 'new todo 1',
  isDone: false,
  date: 12345678,
};

// fetch('https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos', {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//     Authorization: 'Bearer sdklghsdgkln srutulsgywoi nwutoli',
//   },
//   body: JSON.stringify(todo),
// })
//   .then((resp) => resp.json())
//   .then(console.log);

// fetch('https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/todos/2', {
//   method: 'DELETE',
// });

const URL = 'https://61ddd77df60e8f0017668aa9.mockapi.io/api/v1/';

const fetchFn = async () => {
  const resp = await fetch(`${URL}/todos`);
  const data = await resp.json();

  console.log(data);
};

fetchFn();
