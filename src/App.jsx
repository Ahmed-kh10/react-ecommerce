import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Register from './Register';
import Navbar from './components/Navbar';
import Home from './Home';
import Men from './Men';
import Women from './Women';
import Shoes from './Shoes';
import Electronics from './Electronics';
import Jewelery from './Jewelery';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';
import Categories from './Categories';
import Wishlist from './Wishlist';
import ProductDetails from './ProductDetails';

import './components/Navbar.css';
import './components/ProductCard.css';
import './Cart.css';
import './Categories.css';
import './Wishlist.css';

function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }

      // Normalize image once when adding to cart
      const image =
        product.thumbnail ||
        product.image ||
        (Array.isArray(product.images) ? product.images[0] : '');

      return [...prev, { ...product, image, qty: 1 }];
    });
  }

  function addToWishlist(product) {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      return exists ? prev : [...prev, product];
    });
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/men"
          element={<Men addToCart={addToCart} addToWishlist={addToWishlist} />}
        />
        <Route
          path="/women"
          element={
            <Women addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />
        <Route
          path="/shoes"
          element={
            <Shoes addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />
        <Route
          path="/electronics"
          element={
            <Electronics addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />
        <Route
          path="/jewelery"
          element={
            <Jewelery addToCart={addToCart} addToWishlist={addToWishlist} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} addToWishlist={addToWishlist} />
          }
        />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
