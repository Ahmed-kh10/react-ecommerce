import './ProductCard.css';
import { toast } from 'react-toastify';
import { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = useState(false);

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

  return (
    <div className="card">
      <img
        src={Array.isArray(product.images) ? product.images[0] : product.image}
        alt={product.title}
      />

      <h3>{product.title}</h3>

      <p className="description">{product.description}</p>

      <div className="info">
        <span className="price">${product.price}</span>

        <span className="rate">⭐ {product.rating.rate}</span>
      </div>

      <button className={`btn ${added ? 'added' : ''}`} onClick={handleAdd}>
        {added ? 'Added ✓' : 'Add To Cart 🛒'}
      </button>
    </div>
  );
}

export default ProductCard;
