import { gql } from "@apollo/client";

export const CREATE_EMAIL_MESSAGE = gql`
  mutation Mutation($createEmailMessageInput: CreateEmailMessageInput!) {
  createEmailMessage(createEmailMessageInput: $createEmailMessageInput) {
    _id
    cc
    createdAt
    from
    message
    subject
    isRead
    tray
  }
}
`;
