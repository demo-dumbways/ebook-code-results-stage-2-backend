const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());

let todos = [
  {
    id: 1,
    title: 'Cuci tangan',
    isDone: true,
  },
  {
    id: 2,
    title: 'Jaga jarak',
    isDone: false,
  },
];

app.get('/todos', (req, res) => {
  res.send({ data: todos });
});

app.get('/todo/:id', (req, res) => {
  const id = req.params.id;

  const data = todos.find((todo) => todo.id == id);

  res.send(data);
});

app.post('/todo', (req, res) => {
  const data = req.body;
  todos.push(data);
  res.send({ data: todos });
});

app.patch('/todo/:id', (req, res) => {
  const { id } = req.params;

  todos = todos.map((todo) => {
    if (todo.id == id) {
      return req.body;
    } else {
      return todo;
    }
  });

  const data = todos.find((todo) => todo.id == id);

  res.send({ data });
});

app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send({ data: todos });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
