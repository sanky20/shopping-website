import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items ...</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ${totalAmount}</p>
          <Link to="/">
            <button>Continue Shopping</button>
          </Link>
          <button>Checkout</button>
        </div>
      ) : (
        <div className="checkout">
          <h3>Your Cart is Empty !!!</h3>
          <Link to="/">
            <button>Go back to Home Page</button>
          </Link>
        </div>
      )}
    </div>
  );
};
