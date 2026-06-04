import { toast } from 'react-toastify';
import './Cart.css';

function Cart({ cart, setCart }) {
  function removeItem(id) {
    toast.success('The quantity was reduced by 1 ✅', {
      autoClose: 3000,
      theme: 'dark',
    });
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item,
        )
        .filter((item) => item.qty > 0),
    );
  }
  function addItem(id) {
    toast.success('The quantity was supplied by 1 ✅', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item,
      ),
    );
  }

  {
    cart.length === 0 && <button className="shop-btn">Shop Now 🛒</button>;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  function confirmPurchase() {
    toast.success('Purchase Confirmed ✅', {
      position: 'top-right',
      autoClose: 3000,
      theme: 'dark',
    });
  }

  return (
    <div className="cart">
      <div className="cart-top">
        <h1 className="carth1">Welcome to the Cart 🛒</h1>

        <p className="cartp1">
          Here you can review your selected items and proceed to checkout.
        </p>
      </div>

      <div className="cart-center">
        {cart.length === 0 && <button className="shop-btn">Shop Now 🛒</button>}
        {cart.length === 0 ? (
          <h2>Your cart is empty, Start shopping</h2>
        ) : (
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} className="cart-img" />

                <div className="cart-info">
                  <h3>{item.title}</h3>
                  <p>
                    Price:
                    <span>${item.price}</span>
                  </p>
                  <p>
                    Category:
                    <span>{item.category}</span>
                  </p>

                  <p>
                    Quantity:
                    <span>{item.qty}</span>
                  </p>

                  <p>
                    Price:
                    <span>${(item.price * item.qty).toFixed(2)}</span>
                  </p>
                </div>

                <div className="btncart">
                  <button className="add-btn" onClick={() => addItem(item.id)}>
                    Add
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-summary">
              <h2>Cart Summary</h2>

              <p>
                Total Items:
                <span>{totalItems}</span>
              </p>

              <p>
                Total Price:
                <span>${totalPrice}</span>
              </p>

              <button className="confirm-btn" onClick={confirmPurchase}>
                Confirm Purchase
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="cart-bottom">
        <p className="cartp2">Thank you for shopping with us!</p>
      </div>
    </div>
  );
}
export default Cart;
