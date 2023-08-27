const { Book } = require('../models');

const getAll = async () => {
  const result = await Book.findAll();
  return result;
};

const getById = async (bookId) => {
  const result = await Book.findByPk(bookId);
  return result;
};

const create = async (book) => {
  const { title, author, pageQuantity } = book;
  const newBook = Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (bookId, bookInfo) => {
  const { title, author, pageQuantity } = bookInfo;
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity },
    { where: { id: bookId } },
  );
  return updatedBook;
};

const remove = async (bookId) => {
  const book = await Book.destroy({ where: { id: bookId } });
  console.log(book);
  return book;
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  remove,
};
