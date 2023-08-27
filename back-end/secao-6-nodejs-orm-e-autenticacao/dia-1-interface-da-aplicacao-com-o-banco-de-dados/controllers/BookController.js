const { booksService } = require('../services');

const errorMessage = 'Something is wrong';

const getAll = async (req, res) => {
  const books = await booksService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await booksService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: errorMessage });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = booksService.create({ title, author, pageQuantity });
    return res.status(201).json(newBook);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: errorMessage });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const updatedBook = { title, author, pageQuantity };
    const result = booksService.update(id, updatedBook);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: errorMessage });
  }
};

const remove = async (req, res) => {
    try {
      const { id } = req.params;
      const result = booksService.remove(id);
      return res.status(200).json(result);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: errorMessage });
    }
  };

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
