import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";

export default function Shop() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.getAllProducts || [];
  console.log(products);

  return (
    <div>
      <h1>PRODUCTS</h1>
    </section>
  );
}
