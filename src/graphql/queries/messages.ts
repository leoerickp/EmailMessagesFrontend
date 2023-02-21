import { gql } from "@apollo/client";

export const GET_MESSAGES = gql`
  query EmailMessages($tray: ValidTray!, $limit: Int, $offset: Int) {
    emailMessages(tray: $tray, limit: $limit, offset: $offset) {
      _id
      isRead
      cc
      to
      createdAt
      from
      message
      subject
      tray
    }
  }
`;
export const GET_ONE_MESSAGE = gql`
  query EmailMessage($emailMessageId: String!) {
  emailMessage(id: $emailMessageId) {
    _id
    isRead
    cc
    to
    createdAt
    from
    message
    subject
    tray
  }
}
`;

export const GET_COUNT_MESSAGES = gql`
  query Query($tray: ValidTray!) {
  countEmailMessages(tray: $tray)
}
`;