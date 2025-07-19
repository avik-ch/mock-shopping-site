import { useState, useEffect } from "react";
import classes from "./shop.module.css";
import ProductCard from "./ProductCard";

const useStoreData = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => setStoreItems(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { storeItems, error, loading };
};

function Shop() {
  const { storeItems, error, loading } = useStoreData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>A network error was encountered</div>
  }

  return (
    <div className={`${classes.container}`}>
      Currently in shop page
      <ProductCard />
    </div>
  );
}

export default Shop;
