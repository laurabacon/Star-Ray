// import React, { useEffect, useState } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
//       const fetchedItems = [];

//       for (let i = 0; i < cartData.length; i++) {
//         const id = cartData[i].cartId;
//         const response = await fetch(`/cart/${id}`);
//         const item = await response.json();
//         fetchedItems.push(item);
//       }

//       setCartItems(fetchedItems);
//     };

//     fetchCartItems();
//   }, []);

//   return (
//     <div id="cart-template cartContainer">
//       {cartItems.map((item) => (
//         <div key={item.id} className="col-md-4">
//           <div className={`card ${item.type}`} style={{ width: '18rem' }}>
//             <img src={item.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <p className="card-text">{`${item.scent} - ${item.size}`}</p>
//               <p>${item.price}</p>
//               <button className="btn btn-primary">Remove from cart</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;

export default function Cart() {
  return (
    <div>
      <h1>cart Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
