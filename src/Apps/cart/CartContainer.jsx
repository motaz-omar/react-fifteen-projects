import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
import styles from "./styles/cart_container.module.css";
const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section id={styles.cart}>
        <header>
          <h2>your bag</h2>
          <h4 id={styles["empty-cart"]}>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section id={styles.cart}>
      <header>
        <h2>your bag</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />
        <div id={styles["cart-total"]}>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className={`${styles.btn} ${styles["clear-btn"]}`}
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
