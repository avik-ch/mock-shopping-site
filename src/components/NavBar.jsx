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
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="shop">
              <li>SHOP</li>
            </Link>
            <Link to="cart">
              <li>CART [{totalCartItems}]</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
