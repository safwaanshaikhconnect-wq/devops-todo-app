const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let todos = [{ id: 1, text: 'Learn DevOps', done: false }];

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
    const newTodo = { id: todos.length + 1, text: req.body.text, done: false };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

if (require.main === module) {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;

