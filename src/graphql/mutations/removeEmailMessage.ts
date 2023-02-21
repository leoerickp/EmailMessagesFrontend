import { gql } from "@apollo/client";

export const REMOVE_MESSAGE_MUTATION = gql`
  mutation Mutation($removeEmailMessageId: String!) {
  removeEmailMessage(id: $removeEmailMessageId) {
    _id
    isRead
    tray
  }
}
`;