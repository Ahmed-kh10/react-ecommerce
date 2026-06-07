import './Wishlist.css';

function Wishlist({ wishlist }) {
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-empty">
        <span className="wishlist-empty__icon">🤍</span>
        <h2>Your Wishlist is Empty</h2>
        <p>Add items you love to your wishlist.</p>
      </div>
    );
  }

  return (
    <div className="wishlist">
      <h1>My Wishlist ❤️</h1>
      <div className="wishlist-grid">
        {wishlist.map((product) => {
          const image =
            product.thumbnail ||
            product.image ||
            (Array.isArray(product.images) ? product.images[0] : '');

          return (
            <div key={product.id} className="wishlist-card">
              <div className="wishlist-card__img">
                <img src={image} alt={product.title} />
              </div>
              <div className="wishlist-card__body">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Wishlist;
