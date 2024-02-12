import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

export default function Shop() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.getAllProducts || [];

  return (
    <div>
      <h1>PRODUCTS</h1>
      <main>
        <div>
          <div>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <div>
                <ul>
                  {products.map((product) => (
                    <li key={product._id}>
                      {product.scent}, {product.price}, {product.productType}
                      {product.size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
