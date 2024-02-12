import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

export default function Shop() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.getAllProducts || [];
  console.log(products);

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
                <h2>All Scents:</h2>
                <ul>
                  {products.map((product) => (
                    <li key={product._id}>{product.scent}</li>
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
