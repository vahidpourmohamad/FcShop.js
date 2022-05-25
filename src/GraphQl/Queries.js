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

export const GET_CATEGORIES = gql`
  query Query {
    getCatgories {
      id
      name
      parentId
      imageSrc
      uniUrl
      createdAt
    }
  }
`;