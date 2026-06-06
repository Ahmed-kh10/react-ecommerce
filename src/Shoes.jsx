import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import './ProductPage.css';

const API_URL = 'https://dummyjson.com/products/category/mens-shoes';

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
    if (!wishlisted) {
      addToWishlist(product);

      toast.success('Added To Wishlist ❤️', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark',
      });

      setWishlisted(true);
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
      <button className="cardWishlist" onClick={handleWishlist}>
        {wishlisted ? '♥' : '♡'}
      </button>

      <div className="s-card__img">
        <Link to={`/product/${product.id}`}>
          <img
            src={
              product.thumbnail ||
              (Array.isArray(product.images) ? product.images[0] : '')
            }
            alt={product.title}
          />
        </Link>
      </div>

      <div className="s-card__body">
        <h3>{product.title}</h3>

        <p className="s-desc">{product.description}</p>

        <div className="s-info">
          <span className="s-price">${product.price}</span>

          <span className="s-rate">⭐ {product.rating}</span>
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

  async function fetchProducts() {
    try {
      const res = await fetch(API_URL);

      const data = await res.json();

      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // call the async fetch inside an async IIFE to avoid calling setState synchronously in the effect
    (async () => {
      await fetchProducts();
    })();
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
            <ProductCard
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
