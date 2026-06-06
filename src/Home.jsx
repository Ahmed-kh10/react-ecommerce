import './Home.css';
import { useState } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  async function handleRegister() {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      alert('Account Created ✅');
    } catch (error) {
      console.log(error);
      alert(error.code);
    }
  }

  async function handleLogin() {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert('Welcome Back 🔥');
    } catch (error) {
      console.log(error);
      alert(error.code);
    }
  }

  return (
    <div className="home">
      {/* Floating decorative orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      {/* Grid overlay texture */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Main content */}
      <div className="home-content">
        {/* Badge */}
        <div className="badge">
          <span className="badge-dot" />
          Now Open — Free Shipping on Orders +$50
        </div>

        <h1>
          Welcome To <span>Ellol</span> Store
        </h1>

        <p>Sign in and explore the best deals, curated just for you.</p>

        {/* Login card */}
        <div className="login">
          <div className="login-header">
            <h2>Sign In</h2>
            <p>Access your account</p>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login-meta">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>

          <button type="button" className="btn-login" onClick={handleLogin}>
            Login
            <span className="btn-arrow">→</span>
          </button>

          <button
            type="button"
            className="btn-register"
            onClick={handleRegister}
          >
            Create Account
          </button>
          <p className="signup-prompt">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
