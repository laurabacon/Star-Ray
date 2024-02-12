import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  query getAllProducts {
    getAllProducts {
      _id
      productType
      price
      scent
      size
    }
  }
`;
