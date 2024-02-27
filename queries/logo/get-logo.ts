import { gql } from "@apollo/client";

export const GetLogo = gql`
  query {
    Logo {
      _id
      title
      logo {
        _id
        url
      }
      icon {
        _id
        url
      }
    }
  }
`;
