const express = require('express');
const { bookController } = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const path = '/books/:id';

app.post('/books', bookController.create);
app.put(path, bookController.update);
app.delete(path, bookController.remove);
app.get('/books', bookController.getAll);
app.get(path, bookController.getById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));