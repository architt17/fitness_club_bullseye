// import React, { useEffect, useState } from "react";

// const BookList = () => {
//   const [history, setHistory] = useState([]);

//   useEffect(() => {
//     const storedHistory = localStorage.getItem("bookHistory");
//     if (storedHistory) {
//       setHistory(JSON.parse(storedHistory));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("bookHistory", JSON.stringify(history));
//   }, [history]);

//   return (
//     <div>
//       {history.map((book, index) => (
//         <Book key={index} title={book.title} author={book.author} description={book.description} />
//       ))}
//     </div> 
