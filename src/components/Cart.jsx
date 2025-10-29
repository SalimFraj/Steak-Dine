// Shows the user's selected menu items and allows placing an order

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, removeFromCart, placeOrder } = useContext(AppContext);

  // Calculate total cost of items in cart
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="Cart1">
      <h2 className="Cart">Cart</h2>

      {/* If cart is empty, show message */}
      {cart.length === 0 ? (
        <p style={{color: "gold", textAlign: "center"}}>Your cart is empty</p>
      ) : (
        <div>
          {/* Display each item in cart */}
          {cart.map(item => (
            <div key={item.id}>
              {item.name} - ${item.price}
              <button className="removebtn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}

          {/* Show total and order button */}
          <h3>Total: ${total}</h3>
          <button className="placeorder" onClick={placeOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
