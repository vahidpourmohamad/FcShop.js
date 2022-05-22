import { gql } from "@apollo/client";

export const getProductsGQL = gql`
  query {
    getProducts {
      name
      category
      OLname
      price
      shortDescription
      OLshortDescription
      id
      images
    }
  }
`;

