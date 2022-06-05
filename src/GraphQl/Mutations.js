import { gql } from "@apollo/client";
// const GraphQLUpload = require("graphql-upload/GraphQLUpload.js");

export const REGISTER_MUTATION = gql`
  mutation Register($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      token
      id
      username
      email
      createdAt
    }
  }
`;
export const loginGQL = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      token
      username
    }
  }
`;
export const CREATE_CATEGORY = gql`
  mutation CreateCategory($categoryInput: CategoryInput!) {
    createCategory(CategoryInput: $categoryInput) {
      id
      name
      parentId
    }
  }

`;
export const UPLOAD_FILE = gql`
  mutation Mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;
export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($categoryId: ID!) {
    deleteCategory(CategoryID: $categoryId)
  }
`;
