import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

import './components/Navbar.css';
import './components/ProductCard.css';
import './ProductPage.css';
import './Cart.css';

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,

          image:
            product.image ||
            (Array.isArray(product.images) ? product.images[0] : ''),

          qty: 1,
        },
      ];
    });
  }

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men addToCart={addToCart} />} />
        <Route path="/women" element={<Women addToCart={addToCart} />} />
        <Route path="/shoes" element={<Shoes addToCart={addToCart} />} />
        <Route
          path="/electronics"
          element={<Electronics addToCart={addToCart} />}
        />
        <Route path="/jewelery" element={<Jewelery addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;
