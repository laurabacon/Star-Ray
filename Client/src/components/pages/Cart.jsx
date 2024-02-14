import React from "react";
import AuthService from "../../utils/auth";
//import { Button } from 'react-bootstrap';
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
  const { cart } = useCart();
  const isAuthenticated = AuthService.loggedIn();
  console.log(isAuthenticated);
  console.log(AuthService);
  console.log("Cart Items:", cart.items);

  const handleCheckout = () => {
    if (isAuthenticated) {
      console.log("Placing order for user:", AuthService.getUser().name);
    } else {
      console.log("User is not logged in. Redirecting to login page.");
    }
  };
  // const handleCheckout = () => {
  //   const email = 'Email@email.com';
  //   const subject = 'New Order';
  //   const body = 'Requested items';

  //   // Create a mailto link
  //   const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;

  //   window.location.href = mailtoLink;
  // };

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
                          {cart.items.length} items
                        </MDBTypography>
                      </div>

                      <hr className="my-4" />

                      {cart.items.map((item) => (
                        <div key={item._id}>

<MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  // alt="Cotton T-shirt" 
                  />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{item.scent} {item.productType}</p>
                <p>
                  <span className="text-muted">Size: {item.size} </span>
                  
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={0} type="number" size="sm" />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  ${item.price}
                </MDBTypography>
              </MDBCol>
              {/* How to get the trash icon to show? */}
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon far icon="trash text-danger" size="lg" />
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
                          items {cart.items.length}
                        </MDBTypography>
                        <MDBTypography tag="h5">
                      
                          € {cart.items.reduce((total, item) => total + item.price, 0)}
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
