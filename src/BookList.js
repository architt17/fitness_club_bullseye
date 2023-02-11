import React from "react";
import Book from "./Book";

const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description: "A hilarious romp through the galaxy."
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "A classic epic adventure through Middle-earth."
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    description: "A magical tale of a young wizard's journey."
  }
];

const BookList = () => (
  <div>
    {books.map((book, index) => (
      <Book key={index} title={book.title} author={book.author} description={book.description} />
    ))}
  </div>
);

export default BookList;
