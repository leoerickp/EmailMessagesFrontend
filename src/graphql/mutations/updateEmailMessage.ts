import { gql } from "@apollo/client";

export const UPDATE_MESSAGE_MUTATION = gql`
  mutation UpdateEmailMessage($updateEmailMessageInput: UpdateEmailMessageInput!) {
  updateEmailMessage(updateEmailMessageInput: $updateEmailMessageInput) {
    _id
    isRead
    tray
  }
}
`;
