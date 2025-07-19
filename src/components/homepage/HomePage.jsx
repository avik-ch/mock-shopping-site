import classes from "./homepage.module.css";
import { Link } from "react-router-dom";


function CallToAction() {
  return (
    <div className={classes.card}>
      <p>Welcome to a totally real store!</p>
      <Link to="shop">
        <button className={classes.button}>Shop now!</button>
      </Link>
    </div>
  );
}

function HomePage() {
  return (
    <div className={`${classes.container}`}>
      <h1 className={`logo-font ${classes.homeTitle}`}>! (REAL) STORE</h1>
      <CallToAction />
    </div>
  );
}

export default HomePage;
