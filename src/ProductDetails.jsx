import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProductPage.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // DummyJSON is the unified API — fetch from it directly
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="pd-loading">
        <div className="pd-spinner" />
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pd-loading">
        <p>Product not found.</p>
      </div>
    );
  }

  // Normalize image
  const image =
    product.thumbnail ||
    product.image ||
    (Array.isArray(product.images) ? product.images[0] : '');

  // Normalize rating
  const rating =
    typeof product.rating === 'number'
      ? product.rating
      : (product.rating?.rate ?? '—');

  const reviewCount = product.reviews?.length ?? product.rating?.count ?? null;

  return (
    <div className="pd-page">
      <div className="pd-container">
        {/* Image */}
        <div className="pd-image-wrap">
          <img src={image} alt={product.title} />
        </div>

        {/* Info */}
        <div className="pd-info">
          <span className="pd-category">{product.category}</span>

          <h1 className="pd-title">{product.title}</h1>

          <p className="pd-description">{product.description}</p>

          <div className="pd-meta">
            <span className="pd-price">${product.price}</span>
            <span className="pd-rate">⭐ {rating}</span>
            {reviewCount !== null && (
              <span className="pd-reviews">{reviewCount} reviews</span>
            )}
          </div>

          {product.brand && (
            <p className="pd-detail">
              <strong>Brand:</strong> {product.brand}
            </p>
          )}

          {product.stock !== undefined && (
            <p className="pd-detail">
              <strong>In Stock:</strong> {product.stock} units
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
