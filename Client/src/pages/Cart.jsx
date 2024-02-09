import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
      const fetchedItems = [];

      for (let i = 0; i < cartData.length; i++) {
        const id = cartData[i].cartId;
        const response = await fetch(`/cart/${id}`);
        const item = await response.json();
        fetchedItems.push(item);
      }

      setCartItems(fetchedItems);
    };

    fetchCartItems();
  }, []);

  return (
    <div id="cart-template cartContainer">
      {cartItems.map((item) => (
        <div key={item.id} className="col-md-4">
          <div className={`card ${item.type}`} style={{ width: '18rem' }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{`${item.scent} - ${item.size}`}</p>
              <p>${item.price}</p>
              <button className="btn btn-primary">Remove from cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
