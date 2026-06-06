import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '50px auto',
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        style={{
          width: '400px',
          objectFit: 'contain',
        }}
      />

      <div>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <p>⭐ {product.rating}</p>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
      </div>
    </div>
  );
}

export default ProductDetails;
