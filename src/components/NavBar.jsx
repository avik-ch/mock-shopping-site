import "./styles/navbar.css";
import { Link } from "react-router-dom";

function NavBar({ totalCartItems }) {
  return (
    <div className="nav-container">
      <header>
        <Link to="/">
          <span className="title-text">! (REAL) STORE</span>
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="shop">SHOP</Link>
            </li>
            <li>
              <Link to="cart">CART [{totalCartItems}]</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
