import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './ProductPage.css';

function ShoeCard({ product, addToCart, addToWishlist }) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const image =
    product.thumbnail ||
    (Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : '');

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
    <div className="s-card">
      <button
        className="cardWishlist"
        onClick={handleWishlist}
        aria-label="Add to wishlist"
      >
        {wishlisted ? '♥' : '♡'}
      </button>

      <div className="s-card__img">
        <Link to={`/product/${product.id}`}>
          <img src={image} alt={product.title} />
        </Link>
      </div>

      <div className="s-card__body">
        <h3>{product.title}</h3>
        <p className="s-desc">{product.description}</p>

        <div className="s-info">
          <span className="s-price">${product.price}</span>
          <span className="s-rate">⭐ {rating}</span>
        </div>

        <button className={`s-btn ${added ? 'added' : ''}`} onClick={handleAdd}>
          {added ? 'Added ✓' : 'Add To Cart 🛒'}
        </button>
      </div>
    </div>
  );
}

function Shoes({ addToCart, addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/mens-shoes?limit=20')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="shoes-page">
      <div className="shoes-header">
        <h1>Men Shoes Collection 👟</h1>
        <p>Modern sneakers & premium footwear</p>
      </div>

      <div className="shoes-grid">
        {loading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          products.map((product) => (
            <ShoeCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Shoes;
