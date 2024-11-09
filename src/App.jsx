import { useState } from "react";
import Card from "./components/Card";

export const App = () => {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const resetForm = () => {
    setName("");
    setAuthor("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (name.length < 3 || name.startsWith(" ") || author.length < 6) {
      alert("Por favor chequea que la información sea correcta");
    } else {
      const id = crypto.randomUUID();
      setBooks((books) => [...books, { id, name, author }]);
      resetForm();
    }
  };

  const handleDeleteBook = (id) => {
    setBooks((books) => books.filter((book) => book.id !== id));
  };

  return (
    <main className="container">
      <h1 className="container-header">Registra un libro 📕</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre del libro:
          </label>
          <input
            value={name}
            onChange={handleNameChange}
            name="name"
            type="text"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author" className="form-label">
            Autor:
          </label>
          <input
            value={author}
            onChange={handleAuthorChange}
            name="author"
            type="text"
            className="form-input"
          />
        </div>

        <button type="submit" className="form-button">
          Registrar libro
        </button>
      </form>

      <h2 className="container-header">Libros Registrados ✅</h2>

      {books.map((book) => (
        <Card
          key={book.id}
          name={book.name}
          author={book.author}
          handleDelete={() => handleDeleteBook(book.id)}
        />
      ))}
    </main>
  );
};
