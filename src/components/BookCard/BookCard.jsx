import "./BookCard.css";

export default function BookCard({ bookData }) {

  return (
    <div className="book-card">
      <div className="book-image">
        <img src={bookData.image} alt="book image" />
      </div>
      <div className="book-text">
        <div>
          <h4>{bookData.title}</h4>
          <p className="author">{bookData.author}</p>

          <span className="book-category">{bookData.category}</span>

          <p>{bookData.description}</p>
        </div>

        <div>
          <p className="price">{bookData.price} €</p>

          <button type="button">Plačiau</button>
        </div>
      </div>
    </div>
  );
}
