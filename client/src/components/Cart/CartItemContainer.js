import React from "react";
import CartItem from "./CartItem";

const CartItemContainer = (props) => {
  const {
    cartState,
    giftCardState,
    history,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    topbarState
  } = props;

  return (
    <div className="col-second">
      <div className="d-flex justify-content-between">
        <span className="cart-head"> Cart</span>
        <p
          onClick={() => history.push("/")}
          style={{
            cursor: "pointer",
            textAlign: "left",
            textDecoration: "underline",
            letterSpacing: "0px",
            color: "#00B2AE",
            opacity: 1,
            fontWeight: 500,
          }}
        >
          Continue Shopping
        </p>
      </div>
      {cartState.lineItems.map((item, key) => (
        <CartItem
          payment={giftCardState.selectedCountry}
          item={item}
          key={key}
          removeItem={removeItem}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          topbarState={topbarState}
        />
      ))}
    </div>
  );
};

export default CartItemContainer;
