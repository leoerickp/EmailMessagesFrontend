import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignUp($signupInput: SignUpInput!) {
  signUp(signupInput: $signupInput) {
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
