import { Link } from 'react-router-dom';

function Navbar({ search, setSearch }) {
  return (
    <nav className="navbar" search={search} setSearch={setSearch}>
      <h1 className="logo">Ellol Store</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          <a>Categories ▾</a>

          <ul className="submenu">
            <li>
              <Link to="/men">Clothes Men</Link>
            </li>

            <li>
              <Link to="/women">Clothes Women</Link>
            </li>

            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/jewelery">Jewelery</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
