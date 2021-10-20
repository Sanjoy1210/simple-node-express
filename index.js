const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Woow, I am excited to learn node and express with nodemon and automatic restart');
});

const users = [
  { id: 0, name: 'sabana', email: 'sabana@email.com', phone: '01992932329' },
  { id: 1, name: 'sabnur', email: 'sabnur@email.com', phone: '01992932329' },
  { id: 2, name: 'srabonti', email: 'srabonti@email.com', phone: '01992932329' },
  { id: 3, name: 'suchorita', email: 'suchorita@email.com', phone: '01992932329' },
  { id: 4, name: 'bobita', email: 'bobita@email.com', phone: '01992932329' },
  { id: 5, name: 'kopila', email: 'kopila@email.com', phone: '01992932329' },
]

app.get('/users', (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users);
  }
});

// app.METHOD
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get('/fruits', (req, res) => {
  res.send(['mango', 'oranges', 'banana', 'apple']);
});

app.get('/fruits/mangoes/fozli', (req, res) => {
  res.send('yummy yummy tok marka fozli');
});

app.listen(port, () => {
  console.log('Listening to port', port);
});