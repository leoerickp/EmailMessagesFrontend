import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        _id
        email
        fullName
        isActive
        roles
        createdAt
        updatedAt
      }
    }
  }
`;
