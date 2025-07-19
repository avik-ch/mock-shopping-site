import classes from "./shop.module.css";

function ProductCard({ updateCartCount, productDetails }) {
  return (
    <div className={`${classes.cardContainer}`}>
      <img src="" alt="" />
      <div>Product Name</div>
      <div>
        <button>-</button>
        <label htmlFor="">
          <input type="number" name="product-amount" id="" />
        </label>
        <button>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
