import React, { useState } from "react";
// import bootstrap components
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// tools to query the db
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
// image imports
import lgCandle from "../../assets/lgCandle.jpg";
import scrub from "../../assets/scrub.jpg";
import smlCandle from "../../assets/smlCandle.jpg";
import soap from "../../assets/soap.jpg";

export default function Shop() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.getAllProducts || [];
  const [filterType, setFilterType] = useState("all");

  // function wich takes in the product size and returns image source based on the input
  const getImagePath = (size) => {
    let imageSrc;

    console.log("Size:", size);

    if (size === "7oz yogurt container") {
      imageSrc = lgCandle;
    } else if (size === "3.5oz yogurt container") {
      imageSrc = smlCandle;
    } else if (size === "2oz disk") {
      imageSrc = soap;
    } else {
      imageSrc = scrub;
    }

    console.log("Image Src:", imageSrc);

    return imageSrc;
  };

  // function to filter the products based on product type. if the filtertype=all, show all products. if the filtertype is not all, the filter method is used to return a new array only including products where the product type is equal to the filtertype.
  const filteredProducts =
    filterType === "all"
      ? products
      : products.filter((product) => product.productType === filterType);

  return (
    <div>
      <h1>PRODUCTS</h1>
      {/* buttons to sort the products based on type. changes the value of filtertype based on user input wich will return an array of filtered products */}
      <div>
        <Button variant="primary" onClick={() => setFilterType("all")}>
          All Products
        </Button>{" "}
        <Button variant="primary" onClick={() => setFilterType("candle")}>
          Candles
        </Button>{" "}
        <Button variant="primary" onClick={() => setFilterType("soap")}>
          Soaps
        </Button>{" "}
        <Button variant="primary" onClick={() => setFilterType("scrub")}>
          Scrubs
        </Button>
      </div>
      {/* section that maps over all products and renders them to the page as bootstrap cards */}
      <main>
        <div className="row justify-content-between">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              {filteredProducts.map((product) => (
                <div key={product._id} className="col-md-4 mb-4">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={getImagePath(product.size)}
                      alt={`Product - ${product.size}`}
                    />
                    <Card.Body>
                      <Card.Title>
                        {product.scent} {product.productType}
                      </Card.Title>
                      <Card.Title>{product.size}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
