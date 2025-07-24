import classes from "./shop.module.css";
import { useState } from "react";

function CustomInput({ productAmount, setProductAmount }) {
  return (
    <input
      type="number"
      value={productAmount}
      name="productAmount"
      onChange={(event) => setProductAmount(event.target.value)}
    />
  );
}

function ProductCard({ setItemsInCart, productDetails }) {
  const [productAmount, setProductAmount] = useState(0);

  function updateInputValue(amount) {
    setProductAmount((prev) => {
      const newVal = prev + amount;
      return newVal >= 0 ? newVal : 0;
    });
  }

  function addToCart(amount) {
    if (amount > 0) {
      setItemsInCart((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.id === productDetails.id
        );

        if (existingItemIndex !== -1) {
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + amount,
          };
          return updatedItems;
        } else {
          return [...prevItems, { ...productDetails, quantity: amount }];
        }
      });

      setProductAmount(0);
    }
  }

  return (
    <div className={`${classes.cardContainer}`}>
      <img src={productDetails.image} className={`${classes.productImage}`} />

      <div className={`${classes.information}`}>
        <span
          className={`${classes.productTitle}`}
          title={productDetails.title}
        >
          {productDetails.title}
        </span>

        <div className={`${classes.inputRow}`}>
          <button
            className={`${classes.button}`}
            onClick={() => updateInputValue(-1)}
          >
            -
          </button>

          <CustomInput
            productAmount={productAmount}
            setProductAmount={setProductAmount}
          />

          <button
            className={`${classes.button}`}
            onClick={() => updateInputValue(1)}
          >
            +
          </button>
        </div>

        <button
          className={`${classes.addCartButton}`}
          onClick={() => addToCart(productAmount)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
