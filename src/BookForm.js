import React, { useState } from 'react';

const BookForm = () => {
  const [book, setBook] = useState({ title: '', author: '', ISBN: '' });
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, book]);
    setBook({ title: '', author: '', ISBN: '' });
  };

  const handleDelete = (index) => {
    setBooks(books.filter((book, i) => i !== index));
  };

  const handleRemoveAll = () => {
    setBooks([]);
  };

  return (
    <div>
      <h2>Book Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="ISBN">ISBN:</label>
          <input
            type="text"
            id="ISBN"
            name="ISBN"
            value={book.ISBN}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
      <h2>Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.ISBN}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {books.length > 0 && (
        <button onClick={handleRemoveAll}>Remove All</button>
      )}
    </div>
  );
};

export default BookForm;
