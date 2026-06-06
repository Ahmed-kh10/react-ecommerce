import './ProductCard.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart, addToWishlist }) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAdd() {
    toast.success('Added To Cart ✅', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });

    addToCart(product);

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  }

  function handleWishlist() {
    addToWishlist(product);

    setWishlisted(true);
    if (!wishlisted) {
      addToWishlist(product);

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

    setWishlisted(true);
  }

  return (
    <div className="card">
      <button className="cardWishlist" onClick={handleWishlist}>
        {wishlisted ? '♥' : '♡'}
      </button>

      <div className="s-card__img">
        <Link to={`/product/${product.id}`}>
          <img
            src={
              product.image ||
              product.thumbnail ||
              (Array.isArray(product.images) ? product.images[0] : '')
            }
            alt={product.title}
          />
        </Link>
      </div>

      <h3>{product.title}</h3>

      <p className="description">{product.description}</p>

      <div className="info">
        <span className="price">${product.price}</span>

        <span className="rate">
          ⭐{' '}
          {typeof product.rating === 'object'
            ? product.rating.rate
            : product.rating}
        </span>
      </div>

      <button className={`btn ${added ? 'added' : ''}`} onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add To Cart 🛒'}
      </button>
    </div>
  );
}
export default ProductCard;
