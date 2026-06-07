import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './components/ProductCard.css';

function Electronics({ addToCart, addToWishlist }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/laptops?limit=20')
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      <h1 className="page-title">Electronics 💻</h1>
      <div className="products">
        {loading ? (
          <p className="loading-text">Loading...</p>
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

export default Electronics;
