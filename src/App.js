import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
      const updatedBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, title: newTitle };
        }
        return book;
      });
      setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
       return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    // books.push ({ id: 123, title: title});
    // console.log(books);
    // setBooks(books);
    const updatedBooks = 
    [...books, 
      { id: Math.round(Math.random () * 1000), title }];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
    <BookList onEdit={editBookById} books = {books} onDelete = {deleteBookById} /> 
   <BookCreate onCreate = {createBook}/>
    </div>
  );
}

export default App;
