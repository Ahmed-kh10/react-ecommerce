function Wishlist({ wishlist }) {
  if (wishlist.length === 0) {
    return <h2>Your Wishlist is Empty ❤️</h2>;
  }

  return (
    <div className="wishlist">
      {wishlist.map((product) => (
        <div key={product.id} className="wishlist-card">
          <img
            src={
              Array.isArray(product.images) ? product.images[0] : product.image
            }
            alt={product.title}
          />

          <h3>{product.title}</h3>

          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
