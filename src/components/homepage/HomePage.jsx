import classes from "./homepage.module.css";

function HomePage() {
  return (
    <div className={`${classes.container}`}>
      <h1 className="logo-font home-title">! (REAL) STORE</h1>
      <p>Welcome to a totally real store!</p>
      <button>Shop now!</button>
    </div>
  );
}

export default HomePage;
