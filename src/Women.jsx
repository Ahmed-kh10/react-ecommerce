// import { useState, useEffect } from 'react';
// import './ProductPage.css';

// const API_URL = "https://fakestoreapi.com/products/category/women's%20clothing";

// function StarRating({ rating }) {
//   return (
//     <div className="stars" aria-label={`Rating: ${rating} out of 5`}>
//       {[1, 2, 3, 4, 5].map((s) => (
//         <span
//           key={s}
//           className={`star ${s <= Math.floor(rating) ? 'full' : s - 0.5 <= rating ? 'half' : 'empty'}`}
//         >
//           ★
//         </span>
//       ))}
//     </div>
//   );
// }

// function ProductCard({ product, index }) {
//   const [wished, setWished] = useState(false);
//   const [imgErr, setImgErr] = useState(false);
//   const rating = product.rating?.rate ?? 4.0;
//   const reviews = product.rating?.count ?? 120;
//   const originalPrice = (product.price * 1.3).toFixed(2);
//   const discount = 23;

//   return (
//     <div
//       className="product-card"
//       style={{ animationDelay: `${index * 0.07}s` }}
//     >
//       <div className="card-image card-image-white">
//         {imgErr ? (
//           <div className="card-emoji" aria-hidden="true">
//             👗
//           </div>
//         ) : (
//           <img
//             src={product.image}
//             alt={product.title}
//             className="product-img"
//             onError={() => setImgErr(true)}
//           />
//         )}
//         <span className="tag tag-hot">Women</span>
//         <span className="discount-badge">-{discount}%</span>
//         <button
//           className={`wish-btn ${wished ? 'wished' : ''}`}
//           onClick={() => setWished(!wished)}
//           aria-label="Add to wishlist"
//         >
//           {wished ? '♥' : '♡'}
//         </button>
//       </div>
//       <div className="card-body">
//         <p className="card-desc">Women's Clothing</p>
//         <h3 className="card-name">{product.title}</h3>
//         <div className="card-rating">
//           <StarRating rating={rating} />
//           <span className="rating-val">{rating.toFixed(1)}</span>
//           <span className="rating-count">({reviews})</span>
//         </div>
//         <div className="card-pricing">
//           <span className="price-current">${product.price.toFixed(2)}</span>
//           <span className="price-original">${originalPrice}</span>
//         </div>
//         <button className="btn-add women-btn" type="button">
//           Add to Cart <span className="btn-icon">＋</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// function SkeletonCard() {
//   return (
//     <div className="product-card skeleton">
//       <div className="card-image skeleton-img" />
//       <div className="card-body" style={{ gap: 10 }}>
//         <div className="sk-line sk-short" />
//         <div className="sk-line sk-long" />
//         <div className="sk-line sk-mid" />
//         <div className="sk-line sk-short" />
//       </div>
//     </div>
//   );
// }

// export default function WomenClothes() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [sort, setSort] = useState('default');

//   async function fetchProducts() {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(API_URL);
//       if (!res.ok) throw new Error('Failed');
//       const data = await res.json();
//       setProducts(data);
//     } catch {
//       setError("Couldn't load products. Check your connection.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     (async () => {
//       await fetchProducts();
//     })();
//   }, []);

//   const sorted = [...products].sort((a, b) => {
//     if (sort === 'price-asc') return a.price - b.price;
//     if (sort === 'price-desc') return b.price - a.price;
//     if (sort === 'rating') return (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0);
//     return 0;
//   });

//   return (
//     <div className="product-page women-page">
//       <div className="pg-bg" aria-hidden="true">
//         <div className="pg-orb orb-w1" />
//         <div className="pg-orb orb-w2" />
//         <div className="pg-dots" />
//       </div>
//       <header className="pg-header">
//         <div className="pg-eyebrow">
//           <span className="eyebrow-accent women-accent" /> Women's Collection
//         </div>
//         <h1 className="pg-title">
//           Look <span className="pg-highlight women-hl">Stunning.</span>
//         </h1>
//         <p className="pg-sub">
//           Bold, elegant, and effortlessly beautiful — for every you.
//         </p>
//         <div className="filter-row">
//           <select
//             className="sort-select"
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <option value="default">Sort: Default</option>
//             <option value="price-asc">Price: Low → High</option>
//             <option value="price-desc">Price: High → Low</option>
//             <option value="rating">Top Rated</option>
//           </select>
//           <button
//             className="filter-btn refresh-btn"
//             onClick={fetchProducts}
//             disabled={loading}
//           >
//             {loading ? '...' : '↻ Refresh'}
//           </button>
//         </div>
//       </header>
//       <main className="pg-grid">
//         {loading ? (
//           Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
//         ) : error ? (
//           <div className="pg-error">
//             <p>{error}</p>
//             <button
//               onClick={fetchProducts}
//               className="btn-add women-btn"
//               style={{ width: 'auto', padding: '12px 32px' }}
//             >
//               Try Again
//             </button>
//           </div>
//         ) : (
//           sorted.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)
//         )}
//       </main>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';

import ProductCard from './components/ProductCard';

function Women({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Women;
