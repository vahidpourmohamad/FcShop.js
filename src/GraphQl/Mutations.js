import { gql } from "@apollo/client";

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
