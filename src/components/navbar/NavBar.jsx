import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

function NavBar({ itemsInCart }) {
  const cartCount = itemsInCart.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.quantity;
  }, 0);

  return (
    <div className={`${classes.navContainer}`}>
      <header className={`${classes.header}`}>
        <Link to="/">
          <span className={`logo-font ${classes.headerTitle}`}>
            ! (REAL) STORE
          </span>
        </Link>
        <nav className={`${classes.nav}`}>
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="shop">
              <li>SHOP</li>
            </Link>
            <Link to="cart">
              <li>CART [{cartCount}]</li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
