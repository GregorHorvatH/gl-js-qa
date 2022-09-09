// https://opensource.zalando.com/restful-api-guidelines/#http-status-codes-and-errors

const express = require('express');
const app = express();
const port = 3000;

const arr = [1, 2, 3];

app.get('/', (req, res) => {
  res.send('GET - Hello World!');
});

app.get('/numbers', (req, res) => {
  res.json(arr);
});

app.post('/', (req, res) => {
  res.send('POST - Hello World!');
});

app.delete('/', (req, res) => {
  res.status(400).json({ message: 'invalid ID 345' });
});

app.get('/*', (req, res) => {
  res.send('404');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
