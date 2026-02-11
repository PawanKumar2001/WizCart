import React from 'react';

function Cart(props) {

  return (
    <div className={`container pt-5 mt-5 mb-5 text-${props.mode === "light" ? "dark" : "light"}`}>
      <strong className='display-5'>🛒 My Cart</strong>
          <p className='mt-5 pt-5'>Cart is empty.</p>
          <p>Let's Go on Shopping!</p>
    </div>
  );
}

export default Cart;