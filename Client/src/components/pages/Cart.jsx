import { useNavigate } from "react-router-dom";
import { React, useEffect } from "react";
import AuthService from "../../utils/auth";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useCart } from "../../utils/CartContext";


const CartSomething = () => {
  const { cart, dispatch } = useCart();
  const isAuthenticated = AuthService.loggedIn();
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch({ type: "LOAD_CART", payload: JSON.parse(savedCart) });
    }
  }, [dispatch]);

    
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  console.log(cart);



  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  console.log(isAuthenticated);
  console.log(AuthService);
  console.log("Cart Items:", cart.items);

  const handleRemoveItem = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };
  

  const handleCheckout = () => {
    if (isAuthenticated) {
      console.log("Placing order for user:", AuthService.getUser().name);
    } else {
      navigate("/Login");
      return;
    }

    const email = "jennystarphillips@gmail.com";
    const subject = "New Order";
    const body = cart.items
      .map(
        (item) =>
          `* ${item.scent} ${item.productType} 
            Size: ${item.size} 
            Quantity: ${item.quantity} 
            Price: $${Number(item.price) * item.quantity}\n\n`
      )
      .join("\n");

    // Create a mailto link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent("The items you are requesting:\n\n" + body)}`;

    window.location.href = mailtoLink;
  };

  const handleQuantity = (action, itemId) => {
    const item = cart.items.find((item) => item._id === itemId);
    let updatedQuantity;
  
    if (action === "increment") {
      updatedQuantity = item.quantity + 1;
    } else if (action === "decrement") {
      updatedQuantity = item.quantity - 1;
    }
  
    if (updatedQuantity < 0) {
      // Ensure the quantity doesn't go below 0
      updatedQuantity = 0;
    }
  
    const updatedItem = { ...item, quantity: updatedQuantity };
    dispatch({ type: "UPDATE_QUANTITY", payload: updatedItem });
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol size="12">
            <MDBCard
              className="card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <MDBCardBody className="p-0">
                <MDBRow className="g-0">
                  <MDBCol lg="8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <MDBTypography
                          tag="h1"
                          className="fw-bold mb-0 text-black"
                        >
                          Shopping Cart
                        </MDBTypography>
                        <MDBTypography className="mb-0 text-muted">
                          {cart.items.reduce(
                            (total, item) =>
                              total + parseInt(item.quantity, 10),
                            0
                          )}{" "}
                          items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cart.items.map((item) => (
                        <div key={item._id}>
                          <MDBCard className="rounded-3 mb-4">
                            <MDBCardBody className="p-4">
                              <MDBRow className="justify-content-between align-items-center">
                                <MDBCol md="2" lg="2" xl="2">
                                  <MDBCardImage
                                    className="rounded-3"
                                    fluid
                                  />
                                  <img src={item.primaryImage} alt="ehhhhh" fluid className="rounded-3" style={{ width: "65px" }}/>
                                </MDBCol>
                                <MDBCol md="3" lg="3" xl="3">
                                  <p className="lead fw-normal mb-2">
                                    {item.scent} {item.productType}
                                  </p>
                                  <p>
                                    <span className="text-muted">
                                      Size: {item.size}{" "}
                                    </span>
                                  </p>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="3"
                                  xl="2"
                                  className="d-flex align-items-center justify-content-around"
                                >
                                  <MDBBtn color="link" className="px-2" onClick={() => handleQuantity("decrement", item._id)}>
                                  <MDBIcon fas icon="minus" />
                                  </MDBBtn>

                                  <MDBInput
                                          min={0}
                                          value={item.quantity}
                                          type="number"
                                          size="sm"
                                          onChange={(e) => handleQuantity("update", item._id, e.target.value)}
                                        />

                                  <MDBBtn color="link" className="px-2" onClick={() => handleQuantity("increment", item._id)}>
                                  <MDBIcon fas icon="plus" />
                                  </MDBBtn>
                                </MDBCol>
                                <MDBCol
                                  md="3"
                                  lg="2"
                                  xl="2"
                                  className="offset-lg-1"
                                >
                                  <MDBTypography tag="h5" className="mb-0">
                                    ${Number(item.price) * item.quantity}
                                  </MDBTypography>
                                </MDBCol>
                                {/* How to get the trash icon to show? */}
                                <MDBCol
                                  md="1"
                                  lg="1"
                                  xl="1"
                                  className="text-end"
                                >
                                  <a href="#!" style={{ color: "#cecece" }} onClick={() => handleRemoveItem(item._id)}>
                                  <MDBIcon far icon="trash-alt" className='ms-1' size='2x'/>
                                  </a>
                                </MDBCol>
                              </MDBRow>
                            </MDBCardBody>
                          </MDBCard>
                        </div>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <MDBTypography tag="h6" className="mb-0">
                          <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
                          to shop
                        </MDBTypography>
                      </div>
                    </div>
                  </MDBCol>
                  <MDBCol lg="4" className="bg-grey">
                    <div className="p-5">
                      <MDBTypography
                        tag="h3"
                        className="fw-bold mb-5 mt-2 pt-1"
                      >
                        Summary
                      </MDBTypography>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <MDBTypography tag="h5" className="text-uppercase">
                          Items{" "}
                          {cart.items.reduce(
                            (total, item) =>
                              total + parseInt(item.quantity, 10),
                            0
                          )}
                        </MDBTypography>
                        <MDBTypography tag="h5">
                          ${" "}
                          {cart.items.reduce(
                            (total, item) =>
                              total + Number(item.price) * item.quantity,
                            0
                          )}
                        </MDBTypography>
                      </div>
                      <MDBBtn
                        color="dark"
                        block
                        size="lg"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default CartSomething;
