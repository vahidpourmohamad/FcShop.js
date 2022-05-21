import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation {
    register(registerInput: $registerInput) {
      id
      username
      token
    }
  }
`;

