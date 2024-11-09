export const Card = ({ name, author, handleDelete }) => {
  return (
    <article className="books-container">
      <div className="books-container-content">
        <h2>{name}</h2>
        <p>
          Escrito por <span className="author-span">~{author}~</span>
        </p>
      </div>
      <button className="books-delete-button" onClick={handleDelete}>
        X
      </button>
    </article>
  );
};

export default Card;
