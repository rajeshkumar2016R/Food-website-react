import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";

const Cart = () => {
  const { cartitem, food_list, removeFromCart,getTotalCartAmout } = useContext(StoreContext);
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className="cart-item-title  cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>RS: {item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>RS: {item.price * cartitem[item._id]}</p>
                  <p className="cross" onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-buttom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>SubTotal</p>
              <p>RS: {getTotalCartAmout()}</p>

            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Total</p>
              <p>RS: {getTotalCartAmout()}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
