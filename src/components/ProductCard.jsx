import './ProductCard.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart, addToWishlist }) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  // Normalize image — DummyJSON uses thumbnail/images[], FakeStore uses image
  const image =
    product.thumbnail ||
    product.image ||
    (Array.isArray(product.images) ? product.images[0] : '');

  // Normalize rating — DummyJSON: number, FakeStore: { rate, count }
  const rating =
    typeof product.rating === 'number'
      ? product.rating
      : (product.rating?.rate ?? '—');

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    toast.success('Added To Cart ✅', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });
    setTimeout(() => setAdded(false), 1000);
  }

  function handleWishlist() {
    if (!wishlisted) {
      addToWishlist(product);
      setWishlisted(true);
      toast.success('Added To Wishlist ❤️', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    } else {
      toast.info('Already In Wishlist ❤️', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });
    }
  }

  return (
    <div className="card">
      <button
        className="cardWishlist"
        onClick={handleWishlist}
        aria-label="Add to wishlist"
      >
        {wishlisted ? '♥' : '♡'}
      </button>

      <Link to={`/product/${product.id}`}>
        <img src={image} alt={product.title} />
      </Link>

      <h3>{product.title}</h3>

      <p className="description">{product.description}</p>

      <div className="info">
        <span className="price">${product.price}</span>
        <span className="rate">⭐ {rating}</span>
      </div>

      <button className={`btn ${added ? 'added' : ''}`} onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add To Cart 🛒'}
      </button>
    </div>
  );
}

export default ProductCard;
