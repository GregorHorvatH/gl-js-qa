const login = document.querySelector('.login .input-field');
const password = document.querySelector('.password .input-field');
const button = document.querySelector('#my-button');

const users = [
  {
    name: 'Bobby',
    age: 15,
  },
  {
    name: 'Peter',
    age: 20,
  },
  {
    name: 'Chris',
    age: 25,
  },
];

// console.log(JSON.stringify(users));

let loginValue = '';
let passwordValue = '';

const handleButtonClick = () => {
  const credentials = {
    login: loginValue,
    password: passwordValue,
    age: 12312,
    name: 'Bobby',
    innerObj: {
      age: 15,
      name: 'Chris',
    },
    numbers: [1, 2, 3, 5],
  };

  localStorage.setItem('test', JSON.stringify(credentials));
  console.log(credentials);
};

const loadData = () => {
  const credentials = JSON.parse(localStorage.getItem('test'));

  login.value = credentials.login;
  password.value = credentials.password;
};

loadData();

function handleLoginInput(e) {
  loginValue = e.target.value;
}

const handlePasswordInput = (e) => {
  passwordValue = e.target.value;
};

login.addEventListener('input', handleLoginInput);
password.addEventListener('input', handlePasswordInput);
button.addEventListener('click', handleButtonClick);

// ----- slice -----
// const text = 'ipsumrrtw dolor sit amet consectetur adipisicing elit';
// const spaceIdx = text.indexOf(' ');
// const subText = text.slice(0, spaceIdx);

// console.log(subText);
// console.log(text.slice(49));

// const words = text.split(' ');

// console.log(words[0]);
// console.log(words[words.length - 1]);

// ----- splice -----
// const text = 'ipsum dolor sit amet consectetur adipisicing elit';
// const words = text.split(' ');

// words.splice(1, 1); // delete
// words.splice(1, 0, 'test'); // insert
// words.splice(2, 1, 'tis'); // replace

// console.log(words);
