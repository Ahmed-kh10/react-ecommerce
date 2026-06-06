import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import ProductCard from './ProductCard';

function Navbar({ addToCart }) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const results = query
    ? products.filter((item) =>
        item.title?.toLowerCase().includes(query.toLowerCase()),
      )
    : [];

  const APIs = [
    "https://fakestoreapi.com/products/category/women's%20clothing",
    "https://fakestoreapi.com/products/category/men's%20clothing",
    'https://fakestoreapi.com/products/category/jewelery',
    'https://fakestoreapi.com/products/category/electronics',
    'https://dummyjson.com/products/category/mens-shoes',
  ];

  useEffect(() => {
    const getData = async () => {
      try {
        const responses = await Promise.all(
          APIs.map((url) => fetch(url).then((res) => res.json())),
        );

        let merged = [];

        responses.forEach((item) => {
          if (Array.isArray(item)) {
            merged.push(...item);
          } else if (Array.isArray(item.products)) {
            merged.push(...item.products);
          }
        });

        setProducts(
          merged.filter(
            (item) => item && item.title && typeof item.title === 'string',
          ),
        );
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <nav className="navbar">
      <a href="/">
        <div className="logo">ELLOL STORE</div>
      </a>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>

      <div className="nav-right">
        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {query && (
            <div className="search-results">
              {results.slice(0, 6).map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  addToCart={addToCart}
                />
              ))}
            </div>
          )}
        </div>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
