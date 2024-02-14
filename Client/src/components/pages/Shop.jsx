import React, { useState } from "react";
// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// tools to query the db
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
// image imports
import lgCandle from "../../assets/lgCandlenobackground.png";
import scrub from "../../assets/scrubnobackground.png";
import smlCandle from "../../assets/smlCandlenobackground.png";
import soap from "../../assets/soapnobackground.png";
import { useCart } from "../../utils/CartContext";
import { Link } from "react-router-dom";
import {MDBIcon} from "mdb-react-ui-kit"; 

import Cover from "../../assets/covershop.png";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#CFB4A4",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "18rem",
    margin: "2rem",
    border: "none",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  },
  // coverImageContainer: {
  //   width: "100%",
  // },
  // coverImage: {
  //   width: "100%",
  //   height: "25%",
  // },
};

export default function Shop() {
  const { cart, dispatch } = useCart();
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.getAllProducts || [];
  const [filterType, setFilterType] = useState("all");
  const [hoveredImage, setHoveredImage] = useState("");

  const handleMouseEnter = (productId, hoverImage) => {
    setHoveredImage(hoverImage);
    console.log(hoverImage);
    console.log(this);
  };

  const handleMouseLeave = (productId) => {
    setHoveredImage("");
    console.log(hoveredImage);
  };
  // function takes in the product size and returns image source based on the input
  const getImagePath = (size) => {
    let imageSrc;
    if (size === "7oz yogurt container") {
      imageSrc = lgCandle;
    } else if (size === "3.5oz yogurt container") {
      imageSrc = smlCandle;
    } else if (size === "2oz disk") {
      imageSrc = soap;
    } else {
      imageSrc = scrub;
    }

    // console.log("Image Src:", imageSrc);

    return imageSrc;
  };

  const handleAddToCart = (product) => {
    //TODO: check if product is already in cart
    const addedProduct = {
      ...product,
      primaryImage: getImagePath(product.size),
      quantity: 1,
    };
    dispatch({ type: "ADD_TO_CART", payload: addedProduct });
    console.log("Product", addedProduct);
  }; //add to cart button gets card

  // function to filter the products based on product type. if the filtertype=all, show all products. if the filtertype is not all, the filter method is used to return a new array only including products where the product type is equal to the filtertype.
  const filteredProducts =
    filterType === "all"
      ? products
      : products.filter((product) => {
          console.log(filterType);
          console.log(product.productType);
          return product.productType === filterType;
        });
  console.log(filteredProducts);

  return (
    <div style={styles.container}>
      {/* <div style={styles.coverImageContainer}>
      <img style={styles.coverImage} src={Cover} alt="" />
    </div> */}
      <p>Filter By: </p>
      {/* buttons to sort the products based on type. changes the value of filtertype based on user input wich will return an array of filtered products */}
      <div>
        <Button className="custom-button" onClick={() => setFilterType("all")}>
          All Products
        </Button>{" "}
        <Button
          className="custom-button"
          onClick={() => setFilterType("Candle")}
        >
          Candles
        </Button>{" "}
        <Button className="custom-button" onClick={() => setFilterType("Soap")}>
          Soaps
        </Button>{" "}
        <Button
          className="custom-button"
          onClick={() => setFilterType("Scrub")}
        >
          Scrubs
        </Button>
      </div>
      {/* section that maps over all products and renders them to the page as bootstrap cards */}
      <div style={styles.cardContainer}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {filteredProducts.map((product) => (
              <Card
                key={product._id}
                onMouseEnter={() => handleMouseEnter(this, product.hoverImage)}
                onMouseLeave={() => handleMouseLeave(this)}
                style={styles.card}
              >
                <Card.Img
                  variant="top"
                  src={
                    hoveredImage === product.hoverImage
                      ? hoveredImage
                      : getImagePath(product.size)
                  }
                  alt={`Product - ${product.size}`}
                />
                <Card.Body>
                  <Card.Title>
                    {product.scent} {product.productType}
                  </Card.Title>
                  <Card.Title>{product.size}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  {cart.items.find(item => item._id === product._id) ?
                  <Link to="/Cart">
                    <Button
                    variant="success"
                  >
                    <MDBIcon fas icon="shopping-cart" /> Goodness Added!
                  </Button></Link>
                  : <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to cart
                  </Button>}
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
